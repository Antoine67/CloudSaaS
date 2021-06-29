
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { Delivery, DeliveryCreationParams, DeliveryUpdateParams } from "../model/delivery";
import { DeliveriesService } from "../services/delivery.service";
//import { DeliveriesService } from "../services/delivery.service";

@Route('/deliveries')
@Tags("Deliveries")
export class DeliveryController extends Controller {

	/**
	 * Retrieves all existing deliveries.
	 * @summary Retrieves all existing deliveries
	 */
	@Get()
	public async getAll(): Promise<Delivery[]> {
		return new DeliveriesService().getAll();
	}

	/**
	 * Retrieves the details of an existing delivery.
	 * Supply the unique delivery ID from either and receive corresponding delivery details.
	 * @param id The delivery's identifier
	 * @summary Retrieves a specific existing delivery
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Delivery> {
		return new DeliveriesService().get(id);
	}
	
	/**
	 * Create a new delivery by supplying new delivery's data
	 * @param requestBody The new delivery's data
	 * @summary Create a new delivery
	 */
	@Post()
	public async create(@Body() requestBody: DeliveryCreationParams) : Promise<void> {
		
		if(new DeliveriesService().create(requestBody)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific delivery from the unique delivery ID you provide in query, with the new data you provide in body.
	 * @param id The delivery's identifier
	 * @param requestBody The new delivery's data
	 * @summary Update an existing delivery
	 */
	@Put('/{id}')
	public async update( @Path() id: string, @Body() requestBody: DeliveryUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new DeliveriesService().update(id, requestBody);
		return;
	}

	/**
	 * Delete a specific delivery from the unique delivery ID you provide.
	 * @param id The delivery's identifier
	 * @summary Delete a delivery
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new DeliveriesService().delete(id);
	}
}
