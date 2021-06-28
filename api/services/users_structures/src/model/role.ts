import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { User } from "./user";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => User, user => user.role)
    user: User[];

    @Column({length: 100})
    @IsNotEmpty()
    identifier: string;

    @Column({length: 100})
    @IsNotEmpty()
    title: string;
}

export class RoleCreationParams {

    identifier: string;

    title: string;

}

export class RoleUpdateParams {

    identifier?: string;
    
    title?: string;
    
}
  