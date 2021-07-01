
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body, Query, Security, Request } from 'tsoa';
import * as express from 'express';

import {sendNotification, sendNeedUpdate, UpdateType, NotifStatus, NotifType} from '../socket'

import { Order, OrderCreationParams, OrderUpdateParams } from "../model/order";
import jwtDecrypt from "../middleware/jwt"
import isAdmin from "../middleware/isAdmin"
import { OrdersService } from "../services/order.service";
//import { OrdersService } from "../services/order.service";

@Route('/orders')
@Tags("Orders")
export class OrderController extends Controller {

	/**
	 * Retrieves all existing orders.
	 * @summary Retrieves all existing orders
	 */
	@Security("jwt")
	@Get()
	public async getAll(@Request() expReq: express.Request, @Query() status?: string): Promise<Order[]> {
		const jwt = jwtDecrypt(expReq);
		return new OrdersService().getAll(jwt, status, isAdmin(jwt));
	}

	/**
	 * Retrieves the details of an existing order.
	 * Supply the unique order ID from either and receive corresponding order details.
	 * @param id The order's identifier
	 * @summary Retrieves a specific existing order
	 */
	
	@Security("jwt")
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Order> {
		return new OrdersService().get(id);
	}
	
	/**
	 * Create a new order by supplying new order's data
	 * @param requestBody The new order's data
	 * @summary Create a new order
	 */
	@Security("jwt")
	@Post()
	public async create(@Body() requestBody: OrderCreationParams, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq);
		if(new OrdersService().create(requestBody)) {
			sendNeedUpdate(jwt.restaurantId, UpdateType.ORDER_UPDATE )
			sendNotification("Nouvelle commande en attente de prise en charge", NotifStatus.INFO, NotifType.RESTAURANT, requestBody.restaurant_id)
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
	@Security("jwt")
	@Put('/{id}')
	public async update(@Path() id: string, @Body() requestBody: OrderUpdateParams, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq);
		this.setStatus(201); // set return status 201
		const newOrder = await new OrdersService().update(id, requestBody);
		
		
		sendNeedUpdate(jwt.restaurantId, UpdateType.ORDER_UPDATE )
		switch(requestBody.status) {
			case 'WAITING_DELIVERER':
				sendNotification("Nouvelle commande disponible", NotifStatus.INFO, NotifType.DELIVERER, newOrder.restaurant_id)
				break
			case 'WAITING_VALIDATION':
				sendNotification("Nouvelle commande en attente de prise en charge", NotifStatus.INFO, NotifType.RESTAURANT, newOrder.restaurant_id)
				break
		}
		return;
	}

	/**
	 * Delete a specific order from the unique order ID you provide.
	 * @param id The order's identifier
	 * @summary Delete a order
	 */
	
	@Security("jwt")
	@Delete('/{id}')
	public async remove(@Path() id: string, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq);
		const d = new OrdersService().delete(id);
		sendNeedUpdate(jwt.restaurantId, UpdateType.ORDER_UPDATE )
		return d;
	}
}
