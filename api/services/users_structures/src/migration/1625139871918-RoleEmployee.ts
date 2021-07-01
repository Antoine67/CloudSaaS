import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { RoleEmployee } from "../model/roleEmployee";

export class RoleEmployee1625139871918 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const roleEmployeeRepository = getRepository(RoleEmployee);

        let role_creator = new RoleEmployee();
        role_creator.identifier = "creator";
        role_creator.title = "Créateur";
        await roleEmployeeRepository.save(role_creator);

        let role_moderator = new RoleEmployee();
        role_moderator.identifier = "moderator";
        role_moderator.title = "Modérateur";
        await roleEmployeeRepository.save(role_moderator);

        let role_default = new RoleEmployee();
        role_default.identifier = "default";
        role_default.title = "Défaut";
        await roleEmployeeRepository.save(role_default);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
