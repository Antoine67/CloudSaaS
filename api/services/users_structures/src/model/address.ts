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

    @Column()
    @Length(4, 100)
    country: string;

    @Column()
    @Length(4, 100)
    town: string;

    @Column()
    @Length(4, 100)
    postalCode: string;

    @Column()
    @Length(4, 100)
    address1: string;

    @Column()
    @Length(4, 100)
    address2: string;

    @Column()
    @Length(4)
    longitude: string;

    @Column()
    @Length(4)
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