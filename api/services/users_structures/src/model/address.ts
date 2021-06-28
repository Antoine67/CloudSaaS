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

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, nullable: true})
    country: string;

    @Column({length: 100, nullable: true})
    town: string;

    @Column({length: 100, nullable: true})
    postalCode: string;

    @Column({length: 100, nullable: true})
    address1: string;

    @Column({length: 100, nullable: true})
    address2: string;

    @Column({length: 100, nullable: true})
    longitude: string;

    @Column({length: 100, nullable: true})
    latitude: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}

export class AddressCreationParams {

    country: string;
    
    town: string;
    
    postalCode: string;
    
    address1: string;
    
    address2: string;
    
    longitude: string;
    
    latitude: string;

}

export class AddressUpdateParams {

    country?: string;
    
    town?: string;
    
    postalCode?: string;
    
    address1?: string;
    
    address2?: string;
    
    longitude?: string;
    
    latitude?: string;
    
}