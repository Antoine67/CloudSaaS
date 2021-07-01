import { MenuModel, Menu, MenuCreationParams, MenuUpdateParams } from "../model/menu";
import {Tags} from 'tsoa';


export class MenusService {

  public async getAll(restaurantId : number): Promise<Menu[]> {
    try {
      let items: any = await MenuModel.find({restaurant_id: restaurantId})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async getAllFromRestaurantId(restaurantId : string): Promise<Menu[]> {
    try {
      let items: any = await MenuModel.find({ restaurant_id:  restaurantId})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async create(menuCreationParams: MenuCreationParams, restaurantId : number): Promise<boolean> {
    menuCreationParams.restaurant_id = restaurantId

    const item = new MenuModel(menuCreationParams)
    console.info(menuCreationParams)
    let success = false;
    await item.save(function(err, menu) {
        if (err) success = false;
        else success = true;
    });

    return success;
  }

  public async update(id: string, menuUpdateParams: MenuUpdateParams, restaurantId : number): Promise<void> {
    await MenuModel.findByIdAndUpdate({ _id: id, restaurant_id: restaurantId }, menuUpdateParams)
  }

  public async delete(id: string, restaurantId : number): Promise<void> {
    await MenuModel.findByIdAndRemove({ _id: id, restaurant_id: restaurantId })
  }

  public async get(id: string, restaurantId : number): Promise<any> {
    return await MenuModel.findById({ _id: id, restaurant_id: restaurantId })
  }

}