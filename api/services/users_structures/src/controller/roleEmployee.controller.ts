
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { RoleEmployee, RoleEmployeeCreationParams, RoleEmployeeUpdateParams } from "../model/roleEmployee";
import { RoleEmployeesService } from "../services/roleEmployee.service";
import { Request, Response } from "express";

@Route('/roleEmployees')
@Tags("RoleEmployees")
export class RoleEmployeeController extends Controller {

	/**
	 * Retrieves all existing employee's roles.
	 * @summary Retrieves all existing employee's roles
	 */
	@Get()
	public async getAll(): Promise<RoleEmployee[]> {
		return new RoleEmployeesService().getAll();
	}

	/**
	 * Retrieves the details of an existing employee's role.
	 * Supply the unique employee's role ID from either and receive corresponding employee's role details.
	 * @param id The employee's role's identifier
	 * @summary Retrieves a specific existing employee's role
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<RoleEmployee> {
		return new RoleEmployeesService().get(id);
	}
	
	/**
	 * Create a new employee's role by supplying new employee's role's data
	 * @param requestBody The new employee's role's data
	 * @summary Create a new employee's role
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
	 * Update specific employee's role from the unique employee's role ID you provide in query, with the new data you provide in body.
	 * @param id The employee's role's identifier
	 * @param requestBody The new employee's role's data
	 * @summary Update an existing employee's role
	 */
	@Put('/{id}')
	public async update( @Path() id: string, @Body() req: RoleEmployeeUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new RoleEmployeesService().update(id, req);
		return;
	}

	/**
	 * Delete a specific employee's role from the unique employee's role ID you provide.
	 * @param id The employee's role's identifier
	 * @summary Delete a employee's role
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new RoleEmployeesService().delete(id);
	}
}


