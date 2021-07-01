
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body, Security, Request } from 'tsoa';

import { User, UserUpdateParams } from "../model/user";
import { Address, AddressCreationParams, AddressUpdateParams } from "../model/address";
import { Card, CardCreationParams } from "../model/card";
import { AddressesService } from "../services/address.service";
import { CardsService } from "../services/card.service";
import { UsersService } from "../services/user.service";
import * as express from 'express';
import jwtDecrypt from "../middleware/jwt"
import isAdmin from "../middleware/isAdmin"

@Route('/users')
@Tags("Users")
export class UserController extends Controller {

	/**
	 * Retrieves all existing users.
	 * @summary Retrieves all existing users
	 */
	@Security("jwt")
	@Get()
	public async getAll(@Request() expReq: express.Request): Promise<User[]> {
		const jwt = jwtDecrypt(expReq); 
		return new UsersService().getAll(isAdmin(jwt));
	}

	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 * @param id The user's identifier
	 * @summary Retrieves a specific existing user
	 */
	@Security("jwt")
	@Get('/{id}')
	public async get(@Path() id: string, @Request() expReq: express.Request): Promise<User> {
		const jwt = jwtDecrypt(expReq); 
		return new UsersService().get(id);
	}

	/**
	 * Update specific user from the unique user ID you provide in query, with the new data you provide in body.
	 * @param id The user's identifier
	 * @param requestBody The new user's data
	 * @summary Update an existing user
	 */
	@Security("jwt")
	@Put('/{id}')
	public async update( @Path() id: string, @Body() req: UserUpdateParams, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		this.setStatus(201); // set return status 201
		new UsersService().update(id, req);
		return;
	}

	/**
	 * Delete a specific user from the unique user ID you provide.
	 * @param id The user's identifier
	 * @summary Delete a user
	 */
	@Security("jwt")
	@Delete('/{id}')
	public async remove(@Path() id: string, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		return new UsersService().delete(id);
	}

	/**
	 * Retrieves the details of an existing address.
	 * Supply the unique address ID and user ID from either and receive corresponding address details.
	 * @param id The user's identifier
	 * @param id_2 The address's identifier
	 * @summary Retrieves a specific existing address
	 */
	@Security("jwt")
	@Get('/{id}/addresses/{id_2}')
	public async getAddress(@Path() id: string, @Path() id_2: string, @Request() expReq: express.Request): Promise<Address> {
		const jwt = jwtDecrypt(expReq); 
		return new AddressesService().getAddress(id, id_2, jwt.userId);
	}
	
	/**
	 * Create a new address by supplying new address's data
	 * @param id The user's identifier
	 * @param requestBody The new address's data
	 * @summary Create a new address
	 */
	@Security("jwt")
	@Post('/{id}/addresses')
	public async createAddress( @Path() id: string, @Body() req: AddressCreationParams, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 

		if(new AddressesService().createAddress(id,req)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific address from the unique address ID and user ID you provide in query, with the new data you provide in body.
	 * @param id The user's identifier
	 * @param id_2 The address's identifier
	 * @param requestBody The new address's data
	 * @summary Update an existing address
	 */
	@Security("jwt")
	@Put('/{id}/addresses/{id_2}')
	public async updateAddress( @Path() id: string, id_2: string, @Body() req: AddressUpdateParams, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		 this.setStatus(201); // set return status 201
		 new AddressesService().updateAddress(id, id_2, req);
		 return;
	 }

	 ///////////////////////////////////

	 /**
	  * Retrieves the details of all existing card.
	  * @param id The user's identifier
	  * @summary Retrieves all cards of a specific existing user
	  */
	@Security("jwt")
	@Get('/{id}/cards')
	public async getAllCards(@Path() id: string, @Request() expReq: express.Request): Promise<Card> {
		const jwt = jwtDecrypt(expReq); 
		return new CardsService().getAllCards(id, jwt.userId);
	}

	 /**
	  * Retrieves the details of an existing card.
	  * Supply the unique card ID and user ID from either and receive corresponding card details.
	  * @param id The user's identifier
	  * @param id_2 The card's identifier
	  * @summary Retrieves a specific existing card
	  */
	@Security("jwt")
	@Get('/{id}/cards/{id_2}')
	public async getCard(@Path() id: string, @Path() id_2: string, @Request() expReq: express.Request): Promise<Card> {
		const jwt = jwtDecrypt(expReq); 
		return new CardsService().getCard(id, id_2, jwt.userId);
	}
	 
	 /**
	  * Create a new card by supplying new card's data and the user ID associated
	  * @param id The user's identifier
	  * @param requestBody The new card's data
	  * @summary Create a new card
	  */
	 @Security("jwt")
	 @Post('/{id}/cards')
	 public async createCard( @Path() id: string, @Body() requestBody: CardCreationParams) : Promise<void> {

		 if(new CardsService().createCard(id,requestBody)) {
			 this.setStatus(201); // set return status 201
		 }else {
			 this.setStatus(500); // set return status 500
		 }
		 return;
	 }

	 /**
	  * Delete a specific user from the unique user ID and card ID you provide.
	  * @param id The user's identifier
	  * @param id_2 The card's identifier
	  * @summary Delete a user
	  */
	 @Security("jwt")
	 @Delete('/{id}/cards/{id_2}')
	 public async removeCard(@Path() id: string, @Path() id_2: string, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		 return new CardsService().deleteCard(id, id_2, jwt.userId);
	 }
}


