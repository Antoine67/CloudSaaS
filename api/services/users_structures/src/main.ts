import { app } from './app';
import * as http from 'http';
import { createConnection } from "typeorm";



const PORT = process.env.PORT || 7000;
const server = http.createServer(app);
server.listen(PORT);
server.on('listening', async () => {
	console.info(`Listening on port ${PORT}`);
	try {
		const connection = await createConnection();
		await connection.synchronize();
	} catch (error) {
		console.error(error);
	}
});