import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { User } from "./user";
import { Employee } from "./employee";

@Entity()
export class RoleEmployee {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Employee, employee => employee.role)
    employee: Employee[];

    @Column({length: 100})
    @IsNotEmpty()
    identifier: string;

    @Column({length: 100})
    @IsNotEmpty()
    title: string;
}

export class RoleEmployeeCreationParams {

    identifier: string;

    title: string;

}

export class RoleEmployeeUpdateParams {

    identifier?: string;
    
    title?: string;
    
}
  