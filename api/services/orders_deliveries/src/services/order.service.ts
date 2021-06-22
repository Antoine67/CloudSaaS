import { OrderModel, IOrder, OrderCreationParams, OrderUpdateParams } from "../model/order";
import {Tags} from 'tsoa';

export class OrdersService {

  public async getAll(): Promise<IOrder[]> {
    try {
      let items: any = await OrderModel.find({})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async create(orderCreationParams: OrderCreationParams): Promise<boolean> {

    const item = new OrderModel(orderCreationParams)
    console.info(orderCreationParams)
    let success = false;
    await item.save(function(err, order) {
        if (err) success = false;
        else success = true;
    });

    return success;
  }

  public async update(id: string, orderUpdateParams: OrderUpdateParams): Promise<void> {
    await OrderModel.findByIdAndUpdate({ _id: id }, orderUpdateParams)
  }

  public async delete(id: string): Promise<void> {
    await OrderModel.findByIdAndRemove(id)
  }

  public async get(id: string): Promise<any> {
    return await OrderModel.findById(id)
  }

}