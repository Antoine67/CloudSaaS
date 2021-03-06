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

    @Column({length: 50})
    @IsNotEmpty()
    identifier: string;

    @Column({length: 20})
    @IsNotEmpty()
    title: string;
}