
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { Order, OrderCreationParams, OrderUpdateParams } from "../model/order";
import { OrdersService } from "../services/order.service";
//import { OrdersService } from "../services/order.service";

@Route('/orders')
@Tags("Orders")
export class OrderController extends Controller {

	/**
	 * Retrieves all existing orders.
	 * @summary Retrieves all existing orders
	 */
	@Get()
	public async getAll(): Promise<Order[]> {
		return new OrdersService().getAll();
	}

	/**
	 * Retrieves the details of an existing order.
	 * Supply the unique order ID from either and receive corresponding order details.
	 * @param id The order's identifier
	 * @summary Retrieves a specific existing order
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Order> {
		return new OrdersService().get(id);
	}
	
	/**
	 * Create a new order by supplying new order's data
	 * @param requestBody The new order's data
	 * @summary Create a new order
	 */
	@Post()
	public async create(@Body() requestBody: OrderCreationParams) : Promise<void> {
		
		if(new OrdersService().create(requestBody)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific order from the unique order ID you provide in query, with the new data you provide in body.
	 * @param id The order's identifier
	 * @param requestBody The new order's data
	 * @summary Update an existing order
	 */
	@Put('/{id}')
	public async update( @Path() id: string, @Body() requestBody: OrderUpdateParams) : Promise<void> {
		this.setStatus(201); // set return status 201
		new OrdersService().update(id, requestBody);
		return;
	}

	/**
	 * Delete a specific order from the unique order ID you provide.
	 * @param id The order's identifier
	 * @summary Delete a order
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new OrdersService().delete(id);
	}
}
