
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body, Security, Request } from 'tsoa';
import * as express from 'express';

import { Menu, MenuCreationParams, MenuUpdateParams } from "../model/menu";
import jwtDecrypt from "../middleware/jwt"
import { MenusService } from "../services/menu.service";
//import { MenusService } from "../services/menu.service";

@Route('/menus')
@Tags("Menus")
export class MenuController extends Controller {

	/**
	 * Retrieves all existing menus.
	 * @summary Retrieves all existing menus
	 */
	@Security("jwt")
	@Get()
	public async getAll(@Request() expReq: express.Request): Promise<Menu[]> {
		const jwt = jwtDecrypt(expReq); 
		return new MenusService().getAll(jwt.restaurantId);
	}

	/**
	 * Retrieves the details of an existing menu.
	 * Supply the unique menu ID from either and receive corresponding menu details.
	 * @param id The menu's identifier
	 * @summary Retrieves a specific existing menu
	 */
	@Security("jwt")
	@Get('/{id}')
	public async get(@Request() expReq: express.Request, @Path() id: string): Promise<Menu> {
		const jwt = jwtDecrypt(expReq); 
		return new MenusService().get(id, jwt.restaurantId);
	}
	
	/**
	 * Create a new menu by supplying new menu's data
	 * @param requestBody The new menu's data
	 * @summary Create a new menu
	 */
	@Security("jwt")
	@Post()
	public async create(@Request() expReq: express.Request, @Body() requestBody: MenuCreationParams) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		
		if(new MenusService().create(requestBody, jwt.restaurantId)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific menu from the unique menu ID you provide in query, with the new data you provide in body.
	 * @param id The menu's identifier
	 * @param requestBody The new menu's data
	 * @summary Update an existing menu
	 */
	@Security("jwt")
	@Put('/{id}')
	public async update(@Request() expReq: express.Request, @Path() id: string, @Body() requestBody: MenuUpdateParams) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		this.setStatus(201); // set return status 201
		new MenusService().update(id, requestBody, jwt.restaurantId);
		return;
	}

	/**
	 * Delete a specific menu from the unique menu ID you provide.
	 * @param id The menu's identifier
	 * @summary Delete a menu
	 */
	@Security("jwt")
	@Delete('/{id}')
	public async remove(@Request() expReq: express.Request, @Path() id: string) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		return new MenusService().delete(id, jwt.restaurantId);
	}

	/**
	 * Retrieves all existing menus from a given restaurant.
	 * @summary Retrieves all existing menus from a given restaurant
	 */
	@Get('/restaurants/{id}')
	public async getAllFromRestaurantId(@Path() id: string): Promise<Menu[]> {
		return new MenusService().getAllFromRestaurantId(id);
	}
}
