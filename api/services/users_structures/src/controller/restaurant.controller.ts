
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body, Security, Request } from 'tsoa';
import * as express from 'express';

import { Restaurant, RestaurantUpdateParams, RestaurantCreationParams } from "../model/restaurant";
import { Address, AddressCreationParams, AddressUpdateParams } from "../model/address";
import { Card, CardCreationParams } from "../model/card";
import { AddressesService } from "../services/address.service";
import { CardsService } from "../services/card.service";
import { RestaurantsService } from "../services/restaurant.service";
import { Employee, EmployeeCreationParams, EmployeeUpdateParams } from "../model/employee";
import { EmployeesService } from '../services/employee.service';
import jwtDecrypt from "../middleware/jwt"
import isAdmin from "../middleware/isAdmin"

@Route('/restaurants')
@Tags("Restaurants")
export class RestaurantController extends Controller {

	/**
	 * Retrieves all existing restaurants.
	 * @summary Retrieves all existing restaurants
	 */
	@Security("jwt")
	@Get()
	public async getAll(@Request() expReq: express.Request): Promise<Restaurant[]> {
		const jwt = jwtDecrypt(expReq); 
		return new RestaurantsService().getAll(isAdmin(jwt));
	}

	/**
	 * Retrieves the details of an existing restaurant.
	 * Supply the unique restaurant ID from either and receive corresponding restaurant details.
	 * @param id The restaurant's identifier
	 * @summary Retrieves a specific existing restaurant
	 */
	@Security("jwt")
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Restaurant> {
		return new RestaurantsService().get(id);
	}

	/**
	 * Update specific restaurant from the unique restaurant ID you provide in query, with the new data you provide in body.
	 * @param id The restaurant's identifier
	 * @param requestBody The new restaurant's data
	 * @summary Update an existing restaurant
	 */
	@Security("jwt")
	@Put('/{id}')
	public async update(@Path() id: string, @Body() req: RestaurantUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new RestaurantsService().update(id, req);
		return;
	}

	/**
	 * Delete a specific restaurant from the unique restaurant ID you provide.
	 * @param id The restaurant's identifier
	 * @summary Delete a restaurant
	 */
	@Security("jwt")
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new RestaurantsService().delete(id);
	}
	 
    /**
     * Create a new restaurant by supplying new restaurant's data
     * @param requestBody The new restaurant's data
     * @summary Create a new restaurant
     */
	@Security("jwt")
    @Post()
    public async create(@Request() expReq: express.Request, @Body() req: RestaurantCreationParams) : Promise<void> {
		const jwt = jwtDecrypt(expReq);

        if(new RestaurantsService().create(jwt, req)) {
            this.setStatus(201); // set return status 201
        }else {
            this.setStatus(500); // set return status 500
        }
        return;
    }

	/**
	 * Retrieves the details of an existing address.
	 * Supply the unique address ID with the restaurant ID and receive corresponding address details.
	 * @param id The restaurant's identifier
	 * @param id_2 The address's identifier
	 * @summary Retrieves a specific existing address
	 */
	@Security("jwt")
	@Get('/{id}/addresses/{id_2}')
	public async getAddress(@Path() id: string, id_2: string): Promise<Address> {
		return new AddressesService().getRestaurantAddress(id, id_2);
	}
	
	/**
	 * Create a new address by supplying new address's data with a specicic restaurant ID
	 * @param id The user's identifier
	 * @param requestBody The new address's data
	 * @summary Create a new address
	 */
	@Security("jwt")
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
	 * Update specific address from the unique address ID and restaurant ID, with the new data you provide in body.
	 * @param id The restaurant's identifier
	 * @param id_2 The address's identifier
	 * @param requestBody The new address's data
	 * @summary Update an existing address
	 */
	@Security("jwt")
	 @Put('/{id}/addresses/{id_2}')
	 public async updateAddress( @Path() id: string, id_2: string, @Body() req: AddressUpdateParams) : Promise<void> {
		 this.setStatus(201); // set return status 201
		 new AddressesService().updateRestaurantAddress(id, id_2, req);
		 return;
	 }

	 ///////////////////////////////////

	 /**
	  * Retrieves the details of all existing employees.
	  * @param id The restaurant's identifier
	  * @summary Retrieves all employees of a specific existing restaurant
	  */
	@Security("jwt")
	 @Get('/{id}/users')
	 public async getAllEmployees(@Path() id: string): Promise<Card> {
		 return new EmployeesService().getAll(id);
	 }

	 /**
	  * Retrieves the details of an existing employee.
	  * Supply the unique restaurant ID and user ID from either and receive corresponding employee details.
	  * @param id The restaurant's identifier
	  * @param id_2 The user's identifier
	  * @summary Retrieves a specific existing employee
	  */
	@Security("jwt")
	  @Get('/{id}/users/{id_2}')
	  public async getEmployee(@Path() id: string, id_2: string): Promise<Card> {
		  return new EmployeesService().get(id, id_2);
	  }
	 
	 /**
	  * Create a new employee by supplying new employee's data
	  * @param id The restaurant's identifier
	  * @param id_2 The user's identifier
	  * @param requestBody The new employee's data
	  * @summary Create a new employee
	  */
	@Security("jwt")
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
	  * Delete a specific employee from the unique restaurant ID and users ID you provide.
	  * @param id The restaurant's identifier
	  * @param id_2 The user's identifier
	  * @summary Delete an employee
	  */
	@Security("jwt")
	 @Delete('/{id}/users/{id_2}')
	 public async removeEmployee(@Path() id: string, id_2: string) : Promise<void> {
		 return new EmployeesService().delete(id, id_2);
	 }

	 /**
	  * Update specific employee from the unique restaurant ID and user ID, with the new data you provide in body.
	  * @param id The restaurant's identifier
	  * @param id_2 The user's identifier
	  * @param requestBody The new employee's data
	  * @summary Update an existing employee
	  */
	@Security("jwt")
	  @Put('/{id}/users/{id_2}')
	  public async updateEmployee( @Path() id: string, id_2: string, @Body() req: EmployeeUpdateParams) : Promise<void> {
		  this.setStatus(201); // set return status 201
		  new EmployeesService().update(id, id_2, req);
		  return;
	  }
}


