import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { RoleEmployee, RoleEmployeeCreationParams, RoleEmployeeUpdateParams } from "../model/roleEmployee";
import {Tags} from 'tsoa';


export class RoleEmployeesService {

  public async getAll(): Promise<RoleEmployee[]> {
    //Get roles from database
		const roleEmployeeRepository = getRepository(RoleEmployee);
		const roles = await roleEmployeeRepository.find({
			select: ["id", "identifier", "title"] //We dont want to send the passwords on response
		});

		//Send the roles object
		return roles;
  }

  public async create(requestBody: RoleEmployeeCreationParams): Promise<boolean> {

    const role = new RoleEmployee()
    for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
            role[key] = value;
        }
    }


    //Validade if the parameters are ok
    const errors = await validate(role);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
  
    const roleRepository = getRepository(RoleEmployee);
    try {
        await roleRepository.save(role);
    } catch (e) {
        console.log(e);
        return;
    }
  
    //If all ok, send 201 response
    console.log("Role created");
  }

  public async update(id: string, requestBody: RoleEmployeeUpdateParams): Promise<void> {
  
    //Try to find role on database
    const roleRepository = getRepository(RoleEmployee);
    let role;
    try {
      role = await roleRepository.findOneOrFail(id);
    } catch (error) {
      console.log("Error not found");
      return;
    }

    for (const [key, value] of Object.entries(requestBody)) {
      if(value != undefined){
        role[key] = value;
      }
    }

    const errors = await validate(role);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
  
    try {
      await roleRepository.save(role);
    } catch (e) {
      console.log(e);
      return;
    }
  }

  public async delete(id: string): Promise<void> {
    const roleRepository = getRepository(RoleEmployee);
    let role: RoleEmployee;
    try {
      role = await roleRepository.findOneOrFail(id);
    } catch (error) {
      console.log(error);
    }
    roleRepository.delete(id);
  }

  public async get(id: string): Promise<any> {
    //Get the role from database
    const roleRepository = getRepository(RoleEmployee);
    try {
      const role = await roleRepository.findOneOrFail(id, {
        select: ["id", "identifier", "title"]
      });
      return role;
    } catch (error) {
        console.log(error);
    }
  }

}