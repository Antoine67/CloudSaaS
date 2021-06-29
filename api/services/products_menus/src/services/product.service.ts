import { ProductModel, Product, ProductCreationParams, ProductUpdateParams } from "../model/product";
import {Tags} from 'tsoa';


export class ProductsService {

  public async getAll(): Promise<Product[]> {
    try {
      let items: any = await ProductModel.find({})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  

  public async getAllFromRestaurantId(restaurantId : string): Promise<Product[]> {
    try {
      let items: any = await ProductModel.find({ restaurant_id:  restaurantId})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async create(productCreationParams: ProductCreationParams): Promise<boolean> {

    const item = new ProductModel(productCreationParams)
    console.info(productCreationParams)
    let success = false;
    await item.save(function(err:any, product:any) {
        if (err) success = false;
        else success = true;
    });

    return success;
  }

  public async update(id: string, productUpdateParams: ProductUpdateParams): Promise<void> {
    await ProductModel.findByIdAndUpdate({ _id: id }, productUpdateParams)
  }

  public async delete(id: string): Promise<void> {
    await ProductModel.findByIdAndRemove(id)
  }

  public async get(id: string): Promise<any> {
    return await ProductModel.findById(id)
  }

}