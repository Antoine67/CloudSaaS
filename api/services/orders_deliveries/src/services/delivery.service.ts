import { DeliveryModel, IDelivery } from "../model/delivery";
import {Tags} from 'tsoa';


export type DeliveryCreationParams = Omit<IDelivery, "id">;
export type DeliveryUpdateParams = Partial<Omit<IDelivery, "id">>;

export class DeliverysService {

  public async getAll(): Promise<IDelivery[]> {
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
    await item.save(function(err, delivery) {
        if (err) success = false;
        else success = true;
    });

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