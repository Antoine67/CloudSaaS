
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { Role, RoleCreationParams, RoleUpdateParams } from "../model/role";
import { RolesService } from "../services/role.service";
import { Request, Response } from "express";

@Route('/roles')
@Tags("Roles")
export class RoleController extends Controller {

	/**
	 * Retrieves all existing users.
	 * @summary Retrieves all existing users
	 */
	@Get()
	public async getAll(): Promise<Role[]> {
		return new RolesService().getAll();
	}

	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 * @param id The user's identifier
	 * @summary Retrieves a specific existing user
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Role> {
		return new RolesService().get(id);
	}
	
	/**
	 * Create a new product by supplying new product's data
	 * @param requestBody The new product's data
	 * @summary Create a new product
	 */
	@Post()
	public async create(@Body() req: RoleCreationParams) : Promise<void> {
		
		if(new RolesService().create(req)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific user from the unique user ID you provide in query, with the new data you provide in body.
	 * @param id The user's identifier
	 * @param requestBody The new user's data
	 * @summary Update an existing user
	 */
	@Put('/{id}')
	public async update( @Path() id: string, @Body() req: RoleUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new RolesService().update(id, req);
		return;
	}

	/**
	 * Delete a specific user from the unique user ID you provide.
	 * @param id The user's identifier
	 * @summary Delete a user
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new RolesService().delete(id);
	}
}


