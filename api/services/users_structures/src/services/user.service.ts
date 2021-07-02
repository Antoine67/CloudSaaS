import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { User, UserUpdateParams, SponsorCode } from "../model/user";
import {Tags} from 'tsoa';


export class UsersService {

  public async getAll(byEmail?: string): Promise<User[]> {
    //Get users from database
		const userRepository = getRepository(User);
    let users
    if(byEmail){
      users = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.address", "address")
        .leftJoinAndSelect("user.role", "role")
        .where("user.email = :email", { email: byEmail })
        .getOne();
    }
    else{
      users = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.address", "address")
        .leftJoinAndSelect("user.role", "role")
        .getMany();
    }   
		

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
      console.log("Error user not found");
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

  public async createSponsor(id: string, body: SponsorCode): Promise<any> {
  
    //Try to find user on database
    const userRepository = getRepository(User);
    
    let user;
    let sponsorUser;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      console.log("Error user not found");
      return;
    }

    try {
      sponsorUser = await userRepository.findOneOrFail({sponsorshipCode: body.sponsorshipCode});
    } catch (error) {
      console.log("Error sponsor user not found");
      return;
    }
    user.sponsorId = sponsorUser.id;

    const errors = await validate(user);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
  
    try {
      await userRepository.save(user);
    } catch (e) {
      console.log("Error while saving user");
      return;
    }

    return user;
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

  public async get(id: string): Promise<User> {
    //Get the user from database
    const userRepository = getRepository(User);
    try {
      const user = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.address", "address")
        .leftJoinAndSelect("user.role", "role")
        .where("user.id = :id", { id: id })
        .getOne();
      return user;
    } catch (error) {
        console.log(error);
    }
  }

}