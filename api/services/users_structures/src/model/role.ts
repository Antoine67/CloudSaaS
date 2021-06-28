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
    role: string;
}

export class RoleCreationParams {

    role: string;

}

export class RoleUpdateParams {

    role?: string;
    
}
  