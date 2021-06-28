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

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.id)
    user: User;

    @ManyToOne(type => Restaurant, restaurant => restaurant.id)
    restaurant: Restaurant;

    @Column()
    role: number;
}

export class EmployeeCreationParams {
    
    role: number;

}

export class EmployeeUpdateParams {
    
    role?: number;

}
  