import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { Role, RoleCreationParams, RoleUpdateParams } from "../model/role";
import {Tags} from 'tsoa';


export class RolesService {

  public async getAll(): Promise<Role[]> {
    //Get roles from database
		const roleRepository = getRepository(Role);
		const roles = await roleRepository.find({
			select: ["id", "role"] //We dont want to send the passwords on response
		});

		//Send the roles object
		return roles;
  }

  public async create(requestBody: RoleCreationParams): Promise<boolean> {

    const role = new Role()
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
  
    var returnObject;
    const roleRepository = getRepository(Role);
    try {
        returnObject = await roleRepository.save(role);
    } catch (e) {
        console.log(e);
        return;
    }
  
    //If all ok, send 201 response
    console.log("Role created");
    return returnObject.id;
  }

  public async update(id: string, requestBody: RoleUpdateParams): Promise<void> {
  
    //Try to find role on database
    const roleRepository = getRepository(Role);
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
    const roleRepository = getRepository(Role);
    let role: Role;
    try {
      role = await roleRepository.findOneOrFail(id);
    } catch (error) {
      console.log(error);
    }
    roleRepository.delete(id);
  }

  public async get(id: string): Promise<any> {
    //Get the role from database
    const roleRepository = getRepository(Role);
    try {
      const role = await roleRepository.findOneOrFail(id, {
        select: ["id", "role"] //We dont want to send the password on response
      });
      return role;
    } catch (error) {
        console.log(error);
    }
  }

}