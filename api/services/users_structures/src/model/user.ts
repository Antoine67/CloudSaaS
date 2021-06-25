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

@Entity()
@Unique(["username", "email", "siret", "sponsorshipCode"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Role, role => role.user)
    @JoinColumn()
    role: Role;

    @OneToOne(type => Address)
    @JoinColumn()
    address: Address;

    @Column()
    @Length(4, 100)
    username: string;

    @Column()
    @Length(4, 100)
    password: string;

    @Column()
    @Length(4, 100)
    name: string;

    @Column()
    @Length(4, 100)
    surname: string;

    @Column()
    age: number;

    @Column()
    @IsNotEmpty()
    email: string;

    @Column()
    @Length(4)
    siret: string;

    @Column()
    @Length(4)
    rib: string;

    @Column()
    @IsNotEmpty()
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

    roleId?: number;

    addressId?: number;

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
  