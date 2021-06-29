import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne, 
    JoinColumn,
    OneToMany,
    ManyToOne 
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { Restaurant } from "./restaurant";
import { User } from "./user";
import { RoleEmployee } from "./roleEmployee";

@Entity()
export class Employee {

    @ManyToOne(type => User, user => user.id, { primary: true, })
    user: User;

    @ManyToOne(type => Restaurant, restaurant => restaurant.id, { primary: true, })
    restaurant: Restaurant;

    @ManyToOne(type => RoleEmployee, roleEmployee => roleEmployee.employee, {eager: true})
    @JoinColumn()
    role: RoleEmployee;
}
