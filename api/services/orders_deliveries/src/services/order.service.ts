import { OrderModel, Order, OrderCreationParams, OrderUpdateParams } from "../model/order";
import {Tags} from 'tsoa';
import { Document } from "mongoose";

export class OrdersService {

  public async getAll(jwt: any, status?: string): Promise<Order[]> {
    try {
      let items: any;

      //Get all orders to take for deliverer
      if (jwt.roleIdentifier == 'ceseat-delivery'){
        if(status && status == "deliveries-open"){
          const returnGet = await OrderModel.findOne({
            deliverer_id: jwt.userId,
            status: "DELIVERY_IN_PROGRESS"
          })
          if(returnGet){
            items = [returnGet]; 
          }
          else {
            items = await OrderModel.find({
              deliver_id: null,
              status: "WAITING_DELIVERER"
            })
          }
        }
      }
      //Get all order for user client
      else if(jwt.roleIdentifier == 'ceseat-restaurant'){
        if(status && status == "validation-open"){
          items = await OrderModel.find({
            restaurant_id: jwt.restaurantId,
            status: "WAITING_VALIDATION"
          });
        }
        else if(status && status == "validation-closed"){
          items = await OrderModel.find({
            restaurant_id: jwt.restaurantId,
            status: "IN_PREPARATION"
          });
        }
        else if(status && status == "waiting-deliverer"){
          items = await OrderModel.find({
            restaurant_id: jwt.restaurantId,
            status: "WAITING_DELIVERER"
          });
        }
        else {
        }
      }
      //Get all order for user client
      else if(jwt.roleIdentifier == 'ceseat'){          
          
        if(status && status == "in-progress"){
          items = await OrderModel.find({
            customer_id: jwt.userId,
            status: ["WAITING_PAYMENT", "WAITING_VALIDATION", "IN_PREPARATION", "WAITING_DELIVERER", "DELIVERY_IN_PROGRESS"]
          });
        }
        else if(status && status == "passed"){
          items = await OrderModel.find({
            customer_id: jwt.userId,
            status: ["ORDER_DELIVERED", "ORDER_CANCELLED_CLIENT", "ORDER_CANCELLED_RESTAURANT"]
          });
        }
        
      }
      else{
        items = await OrderModel.find({})
      }
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
    await item.save(function(err : any, order: any) {
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