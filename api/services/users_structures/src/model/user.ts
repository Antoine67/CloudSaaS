import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne, 
    JoinColumn,
    ManyToOne,
    OneToMany 
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";
import { Address } from "./address";
import { Role } from "./role";
import { Card } from "./card";
import { Employee } from "./employee";

@Entity()
@Unique(["username", "email", "siret", "sponsorshipCode"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Role, role => role.user, {eager: true})
    @JoinColumn()
    role: Role;

    @OneToOne(type => Address)
    @JoinColumn()
    address: Address;

    @OneToMany(type => Card, card => card.id)
    card: Card;

    @OneToMany(type => Employee, employee => employee.restaurant)
    employee: Employee;

    @Column({length: 100})
    username: string;

    @Column({ length: 100, select: false })
    password: string;

    @Column({length: 100, nullable: true})
    name: string;

    @Column({length: 100, nullable: true})
    surname: string;

    @Column({default: 0})
    age: number;

    @Column()
    @IsNotEmpty()
    email: string;

    @Column({length: 100, nullable: true})
    siret: string;

    @Column({length: 100, nullable: true})
    rib: string;

    @Column({length: 100, nullable: true})
    sponsorshipCode: string;

    //Todo
    /*@OneToMany(type => User, user => user.user)
    userSponsor: User;*/

    @Column()
    @IsNotEmpty()
    suspended: boolean;

    @Column()
    @IsNotEmpty()
    notification: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}

export class UserUpdateParams {

    role?: Role;

    address?: Address;

    username?: string;
    
    name?: string;
    
    surname?: string;
    
    age?: number;
    
    email?: string;
    
    siret?: string;
    
    rib?: string;
    
    sponsorshipCode?: string;
    
    suspended?: boolean;
    
    notification?: boolean;
}
  