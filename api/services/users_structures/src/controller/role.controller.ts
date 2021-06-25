
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { Role, RoleCreationParams, RoleUpdateParams } from "../model/role";
import { RolesService } from "../services/role.service";
import { Request, Response } from "express";

@Route('/roles')
@Tags("Roles")
export class RoleController extends Controller {

	/**
	 * Retrieves all existing roles.
	 * @summary Retrieves all existing roles
	 */
	@Get()
	public async getAll(): Promise<Role[]> {
		return new RolesService().getAll();
	}

	/**
	 * Retrieves the details of an existing role.
	 * Supply the unique role ID from either and receive corresponding role details.
	 * @param id The role's identifier
	 * @summary Retrieves a specific existing role
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Role> {
		return new RolesService().get(id);
	}
	
	/**
	 * Create a new role by supplying new role's data
	 * @param requestBody The new role's data
	 * @summary Create a new role
	 */
	@Post()
	public async create(@Body() req: RoleCreationParams) : Promise<void> {
        
		var returnId;
		if(returnId = new RolesService().create(req)) {
			this.setStatus(201); // set return status 201
            return returnId;
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific role from the unique role ID you provide in query, with the new data you provide in body.
	 * @param id The role's identifier
	 * @param requestBody The new role's data
	 * @summary Update an existing role
	 */
	@Put('/{id}')
	public async update( @Path() id: string, @Body() req: RoleUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new RolesService().update(id, req);
		return;
	}

	/**
	 * Delete a specific role from the unique role ID you provide.
	 * @param id The role's identifier
	 * @summary Delete a role
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new RolesService().delete(id);
	}
}


