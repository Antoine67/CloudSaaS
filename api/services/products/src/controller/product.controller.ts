
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { IProduct } from "../model/product";
//import { ProductsService, ProductCreationParams, ProductUpdateParams } from "../services/product.service";
import { ProductsService } from "../services/product.service";

@Route('/products')
@Tags("Products")
export class ProductController extends Controller {

	/**
     * Retrieves all existing products.
	 *  @summary Retrieves all existing products
     */
	@Get()
	public async getAll(): Promise<IProduct[]> {
		return new ProductsService().getAll();
	}

	/**
	 * Retrieves the details of an existing product.
	 * Supply the unique product ID from either and receive corresponding product details.
	 * @param id The product's identifier
	 * @summary Retrieves a specific existing product
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<IProduct> {
		return new ProductsService().get(id);
	}
	
	/**
	 * Create a new product by supplying new product's data
	 * @param requestBody The new product's data
	 * @summary Create a new product
	 */
	@Post()
	public async create(@Body() requestBody: IProduct) : Promise<void> {
		
		if(new ProductsService().create(requestBody)) {
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
	@Put('/{id}')
	public async update( @Path() id: string, @Body() requestBody: IProduct) : Promise<void> {
		this.setStatus(201); // set return status 201
		new ProductsService().update(id, requestBody);
		return;
	}

	/**
	 * Delete a specific product from the unique product ID you provide.
	 * @param id The product's identifier
	 * @summary Delete a product
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new ProductsService().delete(id);
	}
}
