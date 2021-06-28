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
    expirationDate: string;

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

export class CardCreationParams {
    
    type: string;
    
    title: string;
    
    wording: string;
    
    number: string;
    
    expirationDate: string;
    
    cvv: string;

}
  