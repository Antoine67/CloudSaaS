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

    @Column({length: 100, nullable: true})
    rib: string;

    @Column({length: 100})
    title: string;

    @Column({length: 100, nullable: true})
    description: string;
}

export class RestaurantCreationParams {
    
    rib: string;
    
    title: string;
    
    description: string;

}

export class RestaurantUpdateParams {
    
    address?: Address;
    
    rib?: string;
    
    title?: string;
    
    description?: string;

}
  