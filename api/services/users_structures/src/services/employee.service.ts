import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { Employee, EmployeeCreationParams, EmployeeUpdateParams } from "../model/employee";
import { UsersService } from "../services/user.service";
import { RestaurantsService } from "../services/restaurant.service";
import { RoleEmployeesService } from "./roleEmployee.service";
import {Tags} from 'tsoa';


export class EmployeesService {

  public async create(id: string, id_2: string, requestBody: EmployeeCreationParams): Promise<boolean> {

    const employee = new Employee()
    for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
            employee[key] = value;
        }
    }

    //Validade if the parameters are ok
    const errors = await validate(employee);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
    
    const employeeRepository = getRepository(Employee);
    var returnRestaurant = await new RestaurantsService().get(id);
    var returnUser = await new UsersService().get(id_2);
    if(!requestBody.role){
      requestBody.role = await new RoleEmployeesService().getByIdentifier("default");
    }
    if(returnUser != null && returnRestaurant){
        try {
            employee.user = returnUser;
            employee.restaurant = returnRestaurant;
            employee.role = requestBody.role;
            await employeeRepository.save(employee);
        } catch (e) {
            console.log(e);
            return;
        }
    }
  
    //If all ok, send 201 response
    console.log("Employee created");
  }

  public async getAll(id: string): Promise<any> {
    //Get the employee from database
    const employeeRepository = getRepository(Employee);
    
    try {
        const employees = await employeeRepository
            .createQueryBuilder("employee")
            .leftJoinAndSelect("employee.user", "user")
            .leftJoinAndSelect("employee.role", "role")
            .where("employee.restaurantId = :id", { id: id })
            .getMany();
        
        return employees
    } catch (error) {
        console.log(error);
    }
  }

  public async get(id: string, id_2: string): Promise<any> {
    //Get the employee from database
    const employeeRepository = getRepository(Employee);
    
    try {
        const employee = await employeeRepository
            .createQueryBuilder("employee")
            .leftJoinAndSelect("employee.user", "user")
            .leftJoinAndSelect("employee.restaurant", "restaurant")
            .leftJoinAndSelect("employee.role", "role")
            .where("restaurant.id = :id", { id: id })
            .where("user.id = :id", { id: id_2 })
            .getOne();
        if(employee != null){
            return employee;
        }
        else{
            console.log("Wrong employee id / Wrong user id / Wrong restaurant id");
        }
      
    } catch (error) {
        console.log(error);
    }
  }

  public async delete(id: string, id_2: string): Promise<void> {
    const employeeRepository = getRepository(Employee);
    try {
        const employee = await employeeRepository
            .createQueryBuilder("employee")
            .leftJoinAndSelect("employee.user", "user")
            .leftJoinAndSelect("employee.restaurant", "restaurant")
            .where("restaurant.id = :id", { id: id })
            .where("user.id = :id", { id: id_2 })
            .getOne();
        if(employee != null){
            employeeRepository.delete({"user":{"id":parseInt(id_2)},"restaurant":{"id":parseInt(id)}});
        }
        else{
            console.log("Wrong employee id or wrond user id");
        }
    } catch (error) {
        console.log(error);
    }
  }

  public async update(id: string, id_2: string, requestBody: EmployeeUpdateParams): Promise<void> {
  
    //Try to find employee on database
    const employeeRepository = getRepository(Employee);
    var returnEmployee = await new EmployeesService().get(id, id_2);
    if(returnEmployee != null){
      let employee = returnEmployee;

      for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
            employee[key] = value;
        }
      }
      employee.role = await new RoleEmployeesService().get(requestBody.roleId);

      const errors = await validate(employee);
      if (errors.length > 0) {
        console.log(errors);
        return;
      }
    
      try {
        await employeeRepository.save(employee);
      } catch (e) {
        console.log(e);
        return;
      }
    }
  }
}