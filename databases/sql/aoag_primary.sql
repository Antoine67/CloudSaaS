USE [master]
GO

DECLARE
    @hadr_port nvarchar(5),
    @hadr_login_password nvarchar(50),
    @master_key_password nvarchar(50),
    @cert_password nvarchar(50),
    @cmd nvarchar(4000)

SET @master_key_password = '$(MASTER_KEY_PASSWORD)'
SET @hadr_login_password = '$(HADR_LOGIN_PASSWORD)'
SET @cert_password = '$(HADR_CERT_PASSWORD)'
SET @hadr_port = '$(HADR_PORT)'


--create logins for aoag
-- command only accepts string literals so using sp_executesql
PRINT 'CREATING AOAG LOGIN'
SET @cmd = 'CREATE LOGIN aoag_login WITH PASSWORD = ''Pa$$w0rd123'' , DEFAULT_DATABASE=[master], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF'
EXEC sp_executesql @cmd

PRINT 'CREATING AOAG USER on [master]'
CREATE USER aoag_user FOR LOGIN aoag_login;

-- create certificate for AOAG
-- command only accepts string literals so using sp_executesql
PRINT 'CREATING MASTER KEY'
SET @cmd = 'CREATE MASTER KEY ENCRYPTION BY PASSWORD = ''Pa$$w0rd!?*'''
EXEC sp_executesql @cmd

PRINT 'CREATING CERTIFICATE'
CREATE CERTIFICATE aoag_certificate WITH SUBJECT = 'aoag_certificate';

-- command only accepts string literals so using sp_executesql
PRINT 'BACKING UP CERTIFICATE'
SET @cmd = '
BACKUP CERTIFICATE aoag_certificate
TO FILE = ''/var/opt/mssql/shared/aoag_certificate.cert''
WITH PRIVATE KEY (
        FILE = ''/var/opt/mssql/shared/aoag_certificate.key'',
        ENCRYPTION BY PASSWORD = ''Pa$$w0rd1*''
)'
EXEC sp_executesql @cmd

--create HADR endpoint
PRINT 'CREATING HADR ENDPOINT'
SET @cmd = '
CREATE ENDPOINT [Hadr_endpoint]
STATE=STARTED
AS TCP (
    LISTENER_PORT = 5022,
    LISTENER_IP = ALL
)
FOR DATA_MIRRORING (
    ROLE = ALL,
    AUTHENTICATION = CERTIFICATE aoag_certificate,
    ENCRYPTION = REQUIRED ALGORITHM AES
)
'
EXEC sp_executesql @cmd

GRANT CONNECT ON ENDPOINT::Hadr_endpoint TO [aoag_login];

---------------------------------------------------------------------------------------------
--CREATE PRIMARY AG GROUP ON PRIMARY CLUSTER PRIMARY REPLICA
---------------------------------------------------------------------------------------------
--for clusterless AOAG the failover mode always needs to be manual

PRINT 'CREATING AG'
SET @cmd ='
CREATE AVAILABILITY GROUP [AG1]
WITH (
    CLUSTER_TYPE = NONE
)
FOR REPLICA ON
N'''+@@SERVERNAME+''' WITH
(
    ENDPOINT_URL = N''tcp://' + @@SERVERNAME + ':5022'',
    AVAILABILITY_MODE = SYNCHRONOUS_COMMIT,
    SEEDING_MODE = AUTOMATIC,
    FAILOVER_MODE = MANUAL,
    SECONDARY_ROLE (ALLOW_CONNECTIONS = ALL)
),
N''sql_db_2'' WITH
(
    ENDPOINT_URL = N''tcp://sql_db_2:5022'',
    AVAILABILITY_MODE = SYNCHRONOUS_COMMIT,
    SEEDING_MODE = AUTOMATIC,
    FAILOVER_MODE = MANUAL,
    SECONDARY_ROLE (ALLOW_CONNECTIONS = ALL)
);
';

--execute creation of AOAG
exec sp_executesql @cmd


USE [master]
GO

--create sample database
PRINT 'CREATING DATABASE'
CREATE DATABASE node
GO
USE [NODE]
GO

USE [master]
GO

--change recovery model and take full backup for db to meet requirements of AOAG
PRINT 'CHANGING DB RECOVERY MODEL'
ALTER DATABASE [NODE] SET RECOVERY FULL ;

PRINT 'BACKING UP DATABASE'
BACKUP DATABASE [NODE] TO  DISK = N'/var/opt/mssql/backup/node.bak' WITH NOFORMAT, NOINIT,  NAME = N'node-Full Database Backup', SKIP, NOREWIND, NOUNLOAD,  STATS = 10

--wait a bit and add database to AG

WAITFOR DELAY '00:00:10'
PRINT 'ADDING DB TO AG'
ALTER AVAILABILITY GROUP [AG1] ADD DATABASE [NODE] WITH (PRIMARY_ROLE ( ALLOW_CONNECTIONS = READ_WRITE ), SECONDARY_ROLE (ALLOW_CONNECTIONS = READ_ONLY ));
GO
