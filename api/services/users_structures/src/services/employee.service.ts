import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { Employee, EmployeeCreationParams, EmployeeUpdateParams } from "../model/employee";
import { UsersService } from "../services/user.service";
import { RestaurantsService } from "../services/restaurant.service";
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
    var returnUser = await new UsersService().get(id);
    var returnRestaurant = await new RestaurantsService().get(id_2);
    if(returnUser != null && returnRestaurant){
        try {
            employee.user = returnUser;
            employee.restaurant = returnRestaurant;
            await employeeRepository.save(employee);
        } catch (e) {
            console.log(e);
            return;
        }
    }
  
    //If all ok, send 201 response
    console.log("Employee created");
  }

  public async getAll(id: string, id_2: string): Promise<any> {
    //Get the employee from database
    const employeeRepository = getRepository(Employee);
    
    try {
        const employees = await employeeRepository
            .createQueryBuilder("employee")
            .leftJoinAndSelect("employee.user", "user")
            .leftJoinAndSelect("employee.restaurant", "restaurant")
            .where("user.id = :id", { id: id })
            .where("restaurant.id = :id", { id: id_2 })
            .getMany();
        
        return employees
    } catch (error) {
        console.log(error);
    }
  }

  public async get(id: string, id_2: string, id_3: string): Promise<any> {
    //Get the employee from database
    const employeeRepository = getRepository(Employee);
    
    try {
        const employee = await employeeRepository
            .createQueryBuilder("employee")
            .leftJoinAndSelect("employee.user", "user")
            .leftJoinAndSelect("employee.restaurant", "restaurant")
            .where("user.id = :id", { id: id })
            .where("restaurant.id = :id", { id: id_2 })
            .where("employee.id = :id", { id: id_3 })
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

  public async delete(id: string, id_2: string, id_3: string): Promise<void> {
    const employeeRepository = getRepository(Employee);
    try {
        const employee = await employeeRepository
            .createQueryBuilder("employee")
            .leftJoinAndSelect("employee.user", "user")
            .leftJoinAndSelect("employee.restaurant", "restaurant")
            .where("user.id = :id", { id: id })
            .where("restaurant.id = :id", { id: id_2 })
            .where("employee.id = :id", { id: id_3 })
            .getOne();
        if(employee != null){
            employeeRepository.delete(id_2);
        }
        else{
            console.log("Wrong employee id or wrond user id");
        }
    } catch (error) {
        console.log(error);
    }
  }

  public async update(id: string, id_2: string, id_3: string, requestBody: EmployeeUpdateParams): Promise<void> {
  
    //Try to find employee on database
    const employeeRepository = getRepository(Employee);
    var returnEmployee = await new EmployeesService().get(id, id_2, id_3);
    if(returnEmployee != null){
      let employee;
      try {
        employee = await employeeRepository.findOneOrFail(id_3);
      } catch (error) {
        console.log("Error not found");
        return;
      }

      for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
            employee[key] = value;
        }
      }

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