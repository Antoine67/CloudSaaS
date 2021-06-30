
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body, Security, Request } from 'tsoa';
import * as express from 'express';

import { Product, ProductCreationParams, ProductUpdateParams  } from "../model/product";
import jwtDecrypt from "../middleware/jwt"
import { ProductsService } from "../services/product.service";
//import { ProductsService } from "../services/product.service";

@Route('/products')
@Tags("Products")
export class ProductController extends Controller {

	/**
	 * Retrieves all existing products.
	 * @summary Retrieves all existing products
	 */
	@Security("jwt")
	@Get()
	public async getAll(@Request() expReq: express.Request): Promise<Product[]> {
		const jwt = jwtDecrypt(expReq); 
		return new ProductsService().getAll(jwt.restaurantId);
	}

	/**
	 * Retrieves the details of an existing product.
	 * Supply the unique product ID from either and receive corresponding product details.
	 * @param id The product's identifier
	 * @summary Retrieves a specific existing product
	 */
	@Security("jwt")
	@Get('/{id}')
	public async get(@Path() id: string, @Request() expReq: express.Request): Promise<Product> {
		const jwt = jwtDecrypt(expReq); 
		return new ProductsService().get(id, jwt.restaurantId);
	}
	
	/**
	 * Create a new product by supplying new product's data
	 * @param requestBody The new product's data
	 * @summary Create a new product
	 */
	@Security("jwt")
	@Post()
	public async create(@Body() requestBody: ProductCreationParams, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		if(new ProductsService().create(requestBody, jwt.restaurantId)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Update specific product from the unique product ID you provide in query, with the new data you provide in body.
	 * @param id The product's identifier
	 * @param requestBody The new product's data
	 * @summary Update an existing product
	 */
	@Security("jwt")
	@Put('/{id}')
	public async update( @Path() id: string, @Body() requestBody: ProductUpdateParams, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		this.setStatus(201); // set return status 201
		new ProductsService().update(id, requestBody, jwt.restaurantId);
		return;
	}

	/**
	 * Delete a specific product from the unique product ID you provide.
	 * @param id The product's identifier
	 * @summary Delete a product
	 */
	@Security("jwt")
	@Delete('/{id}')
	public async remove(@Path() id: string, @Request() expReq: express.Request) : Promise<void> {
		const jwt = jwtDecrypt(expReq); 
		return new ProductsService().delete(id,jwt.restaurantId);
	}
	
}
