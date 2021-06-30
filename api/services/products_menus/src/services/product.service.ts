import { ProductModel, Product, ProductCreationParams, ProductUpdateParams } from "../model/product";
import {Tags} from 'tsoa';


export class ProductsService {

  public async getAll(restaurantId : number): Promise<Product[]> {
    try {
      let items: any = await ProductModel.find({restaurant_id: restaurantId})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }


  public async create(productCreationParams: ProductCreationParams, restaurantId : number): Promise<boolean> {

    productCreationParams.restaurant_id = restaurantId
    const item = new ProductModel(productCreationParams)
    
    
    let success = false;
    await item.save(function(err:any, product:any) {
        if (err) success = false;
        else success = true;
    });

    return success;
  }

  public async update(id: string, productUpdateParams: ProductUpdateParams, restaurantId : number): Promise<void> {
    await ProductModel.findOneAndUpdate({ _id: id, restaurant_id: restaurantId }, productUpdateParams)
  }

  public async delete(id: string, restaurantId : number): Promise<void> {
    await ProductModel.findOneAndRemove({ _id: id, restaurant_id: restaurantId })
  }

  public async get(id: string, restaurantId : number): Promise<any> {
    return await ProductModel.findOne( {_id: id, restaurant_id: restaurantId })
  }

}