import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { User, UserUpdateParams } from "../model/user";
import {Tags} from 'tsoa';


export class UsersService {

  public async getAll(): Promise<User[]> {
    //Get users from database
		const userRepository = getRepository(User);
		const users = await userRepository.find({
			select: ["id", "role", "address", "username", "name", "surname", "age",
        "email", "siret", "rib", "sponsorshipCode", "suspended",
        "notification", "createdAt", "updatedAt"] //We dont want to send the passwords on response
		});

		//Send the users object
		return users;
  }

  public async update(id: string, requestBody: UserUpdateParams): Promise<void> {
  
    //Try to find user on database
    const userRepository = getRepository(User);
    let user;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      console.log("Error not found");
      return;
    }

    for (const [key, value] of Object.entries(requestBody)) {
      if(value != undefined){
        user[key] = value;
      }
    }

    const errors = await validate(user);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
  
    //Try to safe, if fails, that means username already in use
    try {
      await userRepository.save(user);
    } catch (e) {
      console.log("username already in use");
      return;
    }
  }

  public async delete(id: string): Promise<void> {
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      console.log(error);
    }
    userRepository.delete(id);
  }

  public async get(id: string): Promise<any> {
    //Get the user from database
    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOneOrFail(id, {
        select: ["id", "role", "address", "username", "name", "surname", "age",
        "email", "siret", "rib", "sponsorshipCode", "suspended",
        "notification", "createdAt", "updatedAt"] //We dont want to send the password on response
      });
      return user;
    } catch (error) {
        console.log(error);
    }
  }

}