
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { User, UserUpdateParams } from "../model/user";
import { UsersService } from "../services/user.service";
import { Request, Response } from "express";

@Route('/users')
@Tags("Users")
export class UserController extends Controller {

	/**
	 * Retrieves all existing users.
	 * @summary Retrieves all existing users
	 */
	@Get()
	public async getAll(): Promise<User[]> {
		return new UsersService().getAll();
	}

	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 * @param id The user's identifier
	 * @summary Retrieves a specific existing user
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<User> {
		return new UsersService().get(id);
	}

	/**
	 * Update specific user from the unique user ID you provide in query, with the new data you provide in body.
	 * @param id The user's identifier
	 * @param requestBody The new user's data
	 * @summary Update an existing user
	 */
	@Put('/{id}')
	public async update( @Path() id: string, @Body() req: UserUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new UsersService().update(id, req);
		return;
	}

	/**
	 * Delete a specific user from the unique user ID you provide.
	 * @param id The user's identifier
	 * @summary Delete a user
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new UsersService().delete(id);
	}
}


