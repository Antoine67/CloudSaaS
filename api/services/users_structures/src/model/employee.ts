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

    @ManyToOne(type => User, user => user.id, { primary: true, })
    user: User;

    @ManyToOne(type => Restaurant, restaurant => restaurant.id, { primary: true, })
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
  