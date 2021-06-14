
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { IUser } from "../model/user";
import { UsersService, UserCreationParams, UserUpdateParams } from "../services/user.service";
//import { UsersService } from "../services/user.service";

@Route('/users')
@Tags("Users")
export class UserController extends Controller {

	/**
	 * Retrieves all existing users.
	 * @summary Retrieves all existing users
	 */
	@Get()
	public async getAll(): Promise<IUser[]> {
		return new UsersService().getAll();
	}

	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 * @param id The user's identifier
	 * @summary Retrieves a specific existing user
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<IUser> {
		return new UsersService().get(id);
	}
	
	/**
	 * Create a new user by supplying new user's data
	 * @param requestBody The new user's data
	 * @summary Create a new user
	 */
	@Post()
	public async create(@Body() requestBody: UserCreationParams) : Promise<void> {
		
		if(new UsersService().create(requestBody)) {
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
	public async update( @Path() id: string, @Body() requestBody: UserUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new UsersService().update(id, requestBody);
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
