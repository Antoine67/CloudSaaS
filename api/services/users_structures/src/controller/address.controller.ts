
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { Address, AddressCreationParams, AddressUpdateParams } from "../model/address";
import { AddressesService } from "../services/address.service";
import { Request, Response } from "express";

@Route('/addresses')
@Tags("Addresses")
export class AddressController extends Controller {

	/**
	 * Retrieves all existing addresss.
	 * @summary Retrieves all existing addresses
	 */
	@Get()
	public async getAll(): Promise<Address[]> {
		return new AddressesService().getAll();
	}

	/**
	 * Retrieves the details of an existing address.
	 * Supply the unique address ID from either and receive corresponding address details.
	 * @param id The address's identifier
	 * @summary Retrieves a specific existing address
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Address> {
		return new AddressesService().get(id);
	}
	
	/**
	 * Create a new address by supplying new address's data
	 * @param requestBody The new address's data
	 * @summary Create a new address
	 */
	@Post()
	public async create(@Body() req: AddressCreationParams) : Promise<void> {

		if(new AddressesService().create(req)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific address from the unique address ID you provide in query, with the new data you provide in body.
	 * @param id The address's identifier
	 * @param requestBody The new address's data
	 * @summary Update an existing address
	 */
	@Put('/{id}')
	public async update( @Path() id: string, @Body() req: AddressUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new AddressesService().update(id, req);
		return;
	}

	/**
	 * Delete a specific address from the unique address ID you provide.
	 * @param id The address's identifier
	 * @summary Delete a address
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new AddressesService().delete(id);
	}
}


