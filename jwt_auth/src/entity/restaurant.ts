import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne, 
    JoinColumn,
    OneToMany 
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { Address } from "./address";
import { Employee } from "./employee";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Address)
    @JoinColumn()
    address: Address;

    @OneToMany(type => Employee, employee => employee.user)
    employee: Employee;

    @Column({length: 100, nullable: true})
    rib: string;

    @Column({length: 100})
    title: string;

    @Column({length: 100, nullable: true})
    description: string;
}