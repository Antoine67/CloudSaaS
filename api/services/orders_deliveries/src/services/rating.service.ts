import { RatingModel, IRating } from "../model/rating";
import {Tags} from 'tsoa';


export type RatingCreationParams = Omit<IRating, "id">;

export class RatingsService {

  public async getAll(): Promise<IRating[]> {
    try {
      let items: any = await RatingModel.find({})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async create(ratingCreationParams: RatingCreationParams): Promise<boolean> {

    const item = new RatingModel(ratingCreationParams)
    console.info(ratingCreationParams)
    let success = false;
    await item.save(function(err, rating) {
        if (err) success = false;
        else success = true;
    });

    return success;
  }

  public async delete(id: string): Promise<void> {
    await RatingModel.findByIdAndRemove(id)
  }

  public async get(id: string): Promise<any> {
    return await RatingModel.findById(id)
  }

}