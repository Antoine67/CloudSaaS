
import { Controller, Route, Get, Post, BodyProp, Put, Delete, Path, Tags, Example, Body } from 'tsoa';

import { Rating, RatingCreationParams } from "../model/rating";
import { RatingsService } from "../services/rating.service";
//import { RatingsService } from "../services/rating.service";

@Route('/ratings')
@Tags("Ratings")
export class RatingController extends Controller {

	/**
	 * Retrieves all existing ratings.
	 * @summary Retrieves all existing ratings
	 */
	@Get()
	public async getAll(): Promise<Rating[]> {
		return new RatingsService().getAll();
	}

	/**
	 * Retrieves the details of an existing rating.
	 * Supply the unique rating ID from either and receive corresponding rating details.
	 * @param id The rating's identifier
	 * @summary Retrieves a specific existing rating
	 */
	@Get('/{id}')
	public async get(@Path() id: string): Promise<Rating> {
		return new RatingsService().get(id);
	}
	
	/**
	 * Create a new rating by supplying new rating's data
	 * @param requestBody The new rating's data
	 * @summary Create a new rating
	 */
	@Post()
	public async create(@Body() requestBody: RatingCreationParams) : Promise<void> {
		
		if(new RatingsService().create(requestBody)) {
			this.setStatus(201); // set return status 201
		}else {
			this.setStatus(500); // set return status 500
		}
		return;
	}

	/**
	 * Delete a specific rating from the unique rating ID you provide.
	 * @param id The rating's identifier
	 * @summary Delete a rating
	 */
	@Delete('/{id}')
	public async remove(@Path() id: string) : Promise<void> {
		return new RatingsService().delete(id);
	}
}
