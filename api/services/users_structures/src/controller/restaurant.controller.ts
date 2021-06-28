
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { Restaurant, RestaurantUpdateParams, RestaurantCreationParams } from "../model/restaurant";
import { Address, AddressCreationParams, AddressUpdateParams } from "../model/address";
import { Card, CardCreationParams } from "../model/card";
import { AddressesService } from "../services/address.service";
import { CardsService } from "../services/card.service";
import { RestaurantsService } from "../services/restaurant.service";
import { Request, Response } from "express";
import { Employee, EmployeeCreationParams, EmployeeUpdateParams } from "../model/employee";
import { EmployeesService } from '../services/employee.service';

@Route('/restaurants')
@Tags("Restaurants")
export class RestaurantController extends Controller {

	/**
	 * Retrieves all existing users.
	 * @summary Retrieves all existing users
	 */
	@Get()
	public async getAll(): Promise<Restaurant[]> {
		return new RestaurantsService().getAll();
	}

	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 * @param id The user's identifier
	 * @summary Retrieves a specific existing user
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Restaurant> {
		return new RestaurantsService().get(id);
	}

	/**
	 * Update specific user from the unique user ID you provide in query, with the new data you provide in body.
	 * @param id The user's identifier
	 * @param requestBody The new user's data
	 * @summary Update an existing user
	 */
	@Put('/{id}')
	public async update( @Path() id: string, @Body() req: RestaurantUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new RestaurantsService().update(id, req);
		return;
	}

	/**
	 * Delete a specific user from the unique user ID you provide.
	 * @param id The user's identifier
	 * @summary Delete a user
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new RestaurantsService().delete(id);
	}
	 
    /**
     * Create a new card by supplying new card's data
     * @param requestBody The new card's data
     * @summary Create a new card
     */
    @Post()
    public async create(@Body() req: RestaurantCreationParams) : Promise<void> {

        if(new RestaurantsService().create(req)) {
            this.setStatus(201); // set return status 201
        }else {
            this.setStatus(500); // set return status 500
        }
        return;
    }

	/**
	 * Retrieves the details of an existing address.
	 * Supply the unique address ID from either and receive corresponding address details.
	 * @param id The address's identifier
	 * @summary Retrieves a specific existing address
	 */
	@Get('/{id}/addresses/{id_2}')
	public async getAddress(@Path() id: string, id_2: string): Promise<Address> {
		return new AddressesService().getRestaurantAddress(id, id_2);
	}
	
	/**
	 * Create a new address by supplying new address's data
	 * @param requestBody The new address's data
	 * @summary Create a new address
	 */
	@Post('/{id}/addresses')
	public async createAddress( @Path() id: string, @Body() req: AddressCreationParams) : Promise<void> {

		if(new AddressesService().createRestaurantAddress(id,req)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific address from the unique address ID you provide in query, with the new data you provide in body.
	 * @param id The address's identifier
	 * @param requestBody The new address's data
	 * @summary Update an existing address
	 */
	 @Put('/{id}/addresses/{id_2}')
	 public async updateAddress( @Path() id: string, id_2: string, @Body() req: AddressUpdateParams) : Promise<void> {
		 this.setStatus(201); // set return status 201
		 new AddressesService().updateRestaurantAddress(id, id_2, req);
		 return;
	 }

	 ///////////////////////////////////

	 /**
	  * Retrieves the details of all existing card.
	  * @param id The user's identifier
	  * @summary Retrieves all cards of a specific existing user
	  */
	 @Get('/{id}/users')
	 public async getAllEmployees(@Path() id: string): Promise<Card> {
		 return new EmployeesService().getAll(id);
	 }

	 /**
	  * Retrieves the details of an existing card.
	  * Supply the unique card ID from either and receive corresponding card details.
	  * @param id The card's identifier
	  * @summary Retrieves a specific existing card
	  */
	  @Get('/{id}/users/{id_2}')
	  public async getEmployee(@Path() id: string, id_2: string): Promise<Card> {
		  return new EmployeesService().get(id, id_2);
	  }
	 
	 /**
	  * Create a new card by supplying new card's data
	  * @param requestBody The new card's data
	  * @summary Create a new card
	  */
	 @Post('/{id}/users/{id_2}')
	 public async createEmployee( @Path() id: string, id_2: string, @Body() req: EmployeeCreationParams) : Promise<void> {
 
		 if(new EmployeesService().create(id, id_2, req)) {
			 this.setStatus(201); // set return status 201
		 }else {
			 this.setStatus(500); // set return status 500
		 }
		 return;
	 }

	 /**
	  * Delete a specific user from the unique user ID you provide.
	  * @param id The user's identifier
	  * @summary Delete a user
	  */
	 @Delete('/{id}/users/{id_2}')
	 public async removeEmployee(@Path() id: string, id_2: string) : Promise<void> {
		 return new EmployeesService().delete(id, id_2);
	 }

	 /**
	  * Update specific address from the unique address ID you provide in query, with the new data you provide in body.
	  * @param id The address's identifier
	  * @param requestBody The new address's data
	  * @summary Update an existing address
	  */
	  @Put('/{id}/users/{id_2}')
	  public async updateEmployee( @Path() id: string, id_2: string, @Body() req: EmployeeUpdateParams) : Promise<void> {
		  this.setStatus(201); // set return status 201
		  new EmployeesService().update(id, id_2, req);
		  return;
	  }
}

