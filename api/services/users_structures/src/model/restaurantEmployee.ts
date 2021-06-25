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
import * as bcrypt from "bcryptjs";
import { Restaurant } from "./restaurant";
import { User } from "./user";

@Entity()
export class RestaurantEmployee {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => User, user => user.id)
    @JoinColumn()
    user: User;

    @OneToMany(type => Restaurant, restaurant => restaurant.id)
    @JoinColumn()
    restaurant: Restaurant;

    @Column()
    @Length(4, 100)
    role: number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
  