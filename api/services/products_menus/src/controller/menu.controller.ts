
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { IMenu } from "../model/menu";
import { MenusService, MenuCreationParams, MenuUpdateParams } from "../services/menu.service";
//import { MenusService } from "../services/menu.service";

@Route('/menus')
@Tags("Menus")
export class MenuController extends Controller {

	/**
	 * Retrieves all existing menus.
	 * @summary Retrieves all existing menus
	 */
	@Get()
	public async getAll(): Promise<IMenu[]> {
		return new MenusService().getAll();
	}

	/**
	 * Retrieves the details of an existing menu.
	 * Supply the unique menu ID from either and receive corresponding menu details.
	 * @param id The menu's identifier
	 * @summary Retrieves a specific existing menu
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<IMenu> {
		return new MenusService().get(id);
	}
	
	/**
	 * Create a new menu by supplying new menu's data
	 * @param requestBody The new menu's data
	 * @summary Create a new menu
	 */
	@Post()
	public async create(@Body() requestBody: MenuCreationParams) : Promise<void> {
		
		if(new MenusService().create(requestBody)) {
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
	@Put('/{id}')
	public async update( @Path() id: string, @Body() requestBody: MenuUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new MenusService().update(id, requestBody);
		return;
	}

	/**
	 * Delete a specific menu from the unique menu ID you provide.
	 * @param id The menu's identifier
	 * @summary Delete a menu
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new MenusService().delete(id);
	}
}