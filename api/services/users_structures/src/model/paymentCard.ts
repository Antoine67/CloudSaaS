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
import { User } from "./user";

@Entity()
export class paymentCard {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => User, user => user.id)
    idUserSponsor: User;

    @Column()
    @Length(4, 12)
    type: string;

    @Column()
    @Length(4, 30)
    title: string;

    @Column()
    @Length(4, 30)
    wording: string;

    @Column()
    @Length(4, 20)
    number: string;

    @Column()
    @Length(4)
    expirationDate: Date;

    @Column()
    @Length(4)
    cvv: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
  