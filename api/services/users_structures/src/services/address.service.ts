import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { Address, AddressCreationParams, AddressUpdateParams } from "../model/address";
import {Tags} from 'tsoa';


export class AddressesService {

  public async getAll(): Promise<Address[]> {
    //Get addresses from database
		const addressRepository = getRepository(Address);
		const addresses = await addressRepository.find({
			select: ["id", "country", "town", "postalCode", "address1", "address2", "longitude", "latitude", "createdAt", "updatedAt"]
		});

		return addresses;
  }

  public async create(requestBody: AddressCreationParams): Promise<boolean> {

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
    
    const addressRepository = getRepository(Address);
    try {
        await addressRepository.save(address);
    } catch (e) {
        console.log(e);
        return;
    }
  
    //If all ok, send 201 response
    console.log("Address created");
  }

  public async update(id: string, requestBody: AddressUpdateParams): Promise<void> {
  
    //Try to find address on database
    const addressRepository = getRepository(Address);
    let address;
    try {
      address = await addressRepository.findOneOrFail(id);
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

  public async delete(id: string): Promise<void> {
    const addressRepository = getRepository(Address);
    let address: Address;
    try {
      address = await addressRepository.findOneOrFail(id);
    } catch (error) {
      console.log(error);
    }
    addressRepository.delete(id);
  }

  public async get(id: string): Promise<any> {
    //Get the address from database
    const addressRepository = getRepository(Address);
    try {
      const address = await addressRepository.findOneOrFail(id, {
        select: ["id", "country", "town", "postalCode", "address1", "address2", "longitude", "latitude", "createdAt", "updatedAt"]
      });
      return address;
    } catch (error) {
        console.log(error);
    }
  }

}