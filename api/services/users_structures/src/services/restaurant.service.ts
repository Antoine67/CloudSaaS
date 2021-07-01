import { Request, Response } from "express";
import { getRepository} from "typeorm";
import { validate } from "class-validator";

import { Restaurant, RestaurantUpdateParams, RestaurantCreationParams } from "../model/restaurant";
import { AddressesService } from "../services/address.service";
import { EmployeesService } from "../services/employee.service";
import { RoleEmployeesService } from "./roleEmployee.service";
import {Tags} from 'tsoa';


export class RestaurantsService {

  public async getAll(): Promise<Restaurant[]> {
    //Get users from database
		const restaurantRepository = getRepository(Restaurant);
		const restaurants = await restaurantRepository
        .createQueryBuilder("restaurant")
        .leftJoinAndSelect("restaurant.address", "address")
        .getMany();

		//Send the users object
		return restaurants;
  }

  public async create(jwt: any, requestBody: RestaurantCreationParams): Promise<boolean> {

    const restaurant = new Restaurant()
    for (const [key, value] of Object.entries(requestBody)) {
        if(value != undefined){
            restaurant[key] = value;
        }
    }

    //Validade if the parameters are ok
    const errors = await validate(restaurant);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
    
    const restaurantRepository = getRepository(Restaurant);

    const emptyAddress = {
      "country": "",
      "town": "",
      "postalCode": "",
      "address1": "",
      "address2": "",
      "longitude": "",
      "latitude": ""
    }

    try {
      if(jwt.restaurantId == null){
        let returnRestaurant = await restaurantRepository.save(restaurant);
        const roleEmployee = await new RoleEmployeesService().getByIdentifier("creator");
        new EmployeesService().create(returnRestaurant.id.toString(), jwt.userId, { role: roleEmployee });
        new AddressesService().createRestaurantAddress(returnRestaurant.id.toString(), emptyAddress)
      }
    } catch (e) {
        console.log(e);
        return;
    }
    
    
  
    //If all ok, send 201 response
    console.log("Restaurant created");
  }

  public async update(id: string, requestBody: RestaurantUpdateParams): Promise<void> {
  
    //Try to find user on database
    const restaurantRepository = getRepository(Restaurant);
    let restaurant;
    try {
        restaurant = await restaurantRepository.findOneOrFail(id);
    } catch (error) {
        console.log("Error not found");
        return;
    }

    for (const [key, value] of Object.entries(requestBody)) {
      if(value != undefined){
        restaurant[key] = value;
      }
    }

    const errors = await validate(restaurant);
    if (errors.length > 0) {
      console.log(errors);
      return;
    }
  
    try {
      await restaurantRepository.save(restaurant);
    } catch (e) {
      console.log(e);
      return;
    }
  }

  public async delete(id: string): Promise<void> {
    const restaurantRepository = getRepository(Restaurant);
    let restaurant: Restaurant;
    try {
        restaurant = await restaurantRepository.findOneOrFail(id);
        restaurantRepository.delete(id);
    } catch (error) {
        console.log(error);
    }
  }

  public async get(id: string): Promise<Restaurant> {
    //Get the user from database
    const restaurantRepository = getRepository(Restaurant);
    try {
      const restaurant = await restaurantRepository
        .createQueryBuilder("restaurant")
        .leftJoinAndSelect("restaurant.address", "address")
        .where("restaurant.id = :id", { id: id })
        .getOne();
      return restaurant;
    } catch (error) {
        console.log(error);
    }
  }

}