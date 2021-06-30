import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { Address, AddressCreationParams, AddressUpdateParams } from "../model/address";
import { UsersService } from "../services/user.service";
import { RestaurantsService } from "../services/restaurant.service";
import {Tags} from 'tsoa';


export class AddressesService {

  public async createAddress(id: string, requestBody: AddressCreationParams): Promise<boolean> {

    const address = new Address()
    for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
            address[key] = value;
        }
    }

    //Validade if the parameters are ok
    const errors = await validate(address);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
    
    var returnAddress;
    const addressRepository = getRepository(Address);
    try {
        returnAddress = await addressRepository.save(address);
        new UsersService().update(id, { "address" : returnAddress });
    } catch (e) {
        console.log(e);
        return;
    }

  
    //If all ok, send 201 response
    console.log("Address created");
  }

  public async updateAddress(id: string, id_2: string, requestBody: AddressUpdateParams): Promise<void> {
  
    //Try to find address on database
    const addressRepository = getRepository(Address);
    var returnUser = await new UsersService().get(id);
    if(new String(returnUser.address.id) == id_2){
      let address;
      try {
        address = await addressRepository.findOneOrFail(id_2);
      } catch (error) {
        console.log("Error not found");
        return;
      }

      for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
          address[key] = value;
        }
      }

      const errors = await validate(address);
      if (errors.length > 0) {
        console.log(errors);
        return;
      }
    
      try {
        await addressRepository.save(address);
      } catch (e) {
        console.log(e);
        return;
      }
    }
  }

  public async getAddress(id: string, id_2: string, userId: number): Promise<any> {

    if(id != userId.toString()){
      console.log('Cannot update an another user address')
      return ;
    }
    //Get the address from database
    const addressRepository = getRepository(Address);
    
    try {
      var returnUser = await new UsersService().get(id);
      if(new String(returnUser.address.id) == id_2){
        const address = await addressRepository.findOneOrFail(id_2, {
          select: ["id", "country", "town", "postalCode", "address1", "address2", "longitude", "latitude", "createdAt", "updatedAt"]
        });
        return address;
      }
      else{
        console.log("wrong id")
      }
      
    } catch (error) {
        console.log(error);
    }
  }

  public async createRestaurantAddress(id: string, requestBody: AddressCreationParams): Promise<boolean> {

    const address = new Address()
    for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
            address[key] = value;
        }
    }

    //Validade if the parameters are ok
    const errors = await validate(address);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
    
    var returnAddress;
    const addressRepository = getRepository(Address);
    try {
        returnAddress = await addressRepository.save(address);
        new RestaurantsService().update(id, { "address" : returnAddress });
    } catch (e) {
        console.log(e);
        return;
    }

  
    //If all ok, send 201 response
    console.log("Address created");
  }

  public async updateRestaurantAddress(id: string, id_2: string, requestBody: AddressUpdateParams): Promise<void> {
  
    //Try to find address on database
    const addressRepository = getRepository(Address);
    var returnRestaurant = await new RestaurantsService().get(id);
    if(new String(returnRestaurant.address.id) == id_2){
      let address;
      try {
        address = await addressRepository.findOneOrFail(id_2);
      } catch (error) {
        console.log("Error not found");
        return;
      }

      for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
          address[key] = value;
        }
      }

      const errors = await validate(address);
      if (errors.length > 0) {
        console.log(errors);
        return;
      }
    
      try {
        await addressRepository.save(address);
      } catch (e) {
        console.log(e);
        return;
      }
    }
  }

  public async getRestaurantAddress(id: string, id_2: string): Promise<any> {
    //Get the address from database
    const addressRepository = getRepository(Address);
    
    try {
      var returnRestaurant = await new RestaurantsService().get(id);
      if(new String(returnRestaurant.address.id) == id_2){
        const address = await addressRepository.findOneOrFail(id_2, {
          select: ["id", "country", "town", "postalCode", "address1", "address2", "longitude", "latitude", "createdAt", "updatedAt"]
        });
        return address;
      }
      else{
        console.log("wrong id")
      }
      
    } catch (error) {
        console.log(error);
    }
  }

}