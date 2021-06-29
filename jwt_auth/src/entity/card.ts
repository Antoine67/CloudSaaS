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
import { User } from "./user";

@Entity()
/**
 * @tsoaModel
 */
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.id)
    user: User;

    @Column({length: 100})
    type: string;

    @Column({length: 100})
    title: string;

    @Column({length: 100})
    wording: string;

    @Column({length: 100})
    number: string;

    @Column({length: 100})
    expirationDate: string;

    @Column({length: 100})
    cvv: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}

