import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Role } from "../entity/Role";

export class CreateRoles1624806062801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userRepository = getRepository(Role);

        let role_ceseat = new Role();
        role_ceseat.identifier = "ceseat";
        role_ceseat.title = "Utilisateur";
        await userRepository.save(role_ceseat);

        let role_ceseat_delivery = new Role();
        role_ceseat_delivery.identifier = "ceseat-delivery";
        role_ceseat_delivery.title = "Livreur";
        await userRepository.save(role_ceseat_delivery);

        let role_ceseat_restaurant = new Role();
        role_ceseat_restaurant.identifier = "ceseat-restaurant";
        role_ceseat_restaurant.title = "Restaurateur";
        await userRepository.save(role_ceseat_restaurant);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
