
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { RoleEmployee, RoleEmployeeCreationParams, RoleEmployeeUpdateParams } from "../model/roleEmployee";
import { RoleEmployeesService } from "../services/roleEmployee.service";
import { Request, Response } from "express";

@Route('/roleEmployees')
@Tags("RoleEmployees")
export class RoleEmployeeController extends Controller {

	/**
	 * Retrieves all existing roles.
	 * @summary Retrieves all existing roles
	 */
	@Get()
	public async getAll(): Promise<RoleEmployee[]> {
		return new RoleEmployeesService().getAll();
	}

	/**
	 * Retrieves the details of an existing role.
	 * Supply the unique role ID from either and receive corresponding role details.
	 * @param id The role's identifier
	 * @summary Retrieves a specific existing role
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<RoleEmployee> {
		return new RoleEmployeesService().get(id);
	}
	
	/**
	 * Create a new role by supplying new role's data
	 * @param requestBody The new role's data
	 * @summary Create a new role
	 */
	@Post()
	public async create(@Body() req: RoleEmployeeCreationParams) : Promise<void> {
        
		if(new RoleEmployeesService().create(req)) {
			this.setStatus(201); // set return status 201
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
	public async update( @Path() id: string, @Body() req: RoleEmployeeUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new RoleEmployeesService().update(id, req);
		return;
	}

	/**
	 * Delete a specific role from the unique role ID you provide.
	 * @param id The role's identifier
	 * @summary Delete a role
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new RoleEmployeesService().delete(id);
	}
}


