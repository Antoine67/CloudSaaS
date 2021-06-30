import { DeliveryModel, Delivery, DeliveryCreationParams, DeliveryUpdateParams } from "../model/delivery";
import { OrdersService } from "./order.service";
import {Tags} from 'tsoa';

export class DeliveriesService {

  public async getAll(): Promise<Delivery[]> {
    try {
      let items: any = await DeliveryModel.find({})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async create(deliveryCreationParams: DeliveryCreationParams): Promise<boolean> {
    
    

    const item = new DeliveryModel(deliveryCreationParams)
    console.info(deliveryCreationParams)
    let success = false;
    let save = await item.save();
    console.log(save);

    return success;
  }

  public async update(id: string, deliveryUpdateParams: DeliveryUpdateParams): Promise<void> {
    await DeliveryModel.findByIdAndUpdate({ _id: id }, deliveryUpdateParams)
  }

  public async delete(id: string): Promise<void> {
    await DeliveryModel.findByIdAndRemove(id)
  }

  public async get(id: string): Promise<any> {
    return await DeliveryModel.findById(id)
  }

}