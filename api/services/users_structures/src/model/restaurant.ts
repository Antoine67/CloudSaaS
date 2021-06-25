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

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Address)
    @JoinColumn()
    address: Address;

    @Column()
    @Length(4, 50)
    rib: string;

    @Column()
    @Length(4, 50)
    title: string;

    @Column()
    @Length(4, 50)
    description: string;
}
  