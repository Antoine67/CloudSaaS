import * as mongoose from 'mongoose';

/**
 * Order objects allow merchants to show their available
 * meals/dessert/... for sale
 */
class Order {
    /**
    * Uniq indentifier
    */
    id: string;
    
    /**
    * Uniq indentifier
    */
    date: Date;

    /**
     * Restaurant uniq indentifier reference
     */
    restaurant_id: number;

    /**
    * Restaurant uniq indentifier reference
    */
    customer_id: number;

    /**
    * Restaurant uniq indentifier reference
    */
    deliverer_id: number;
    
    /**
     * Name which represent the order
     */
    status: string;
    
    /**
    * Pricing contained in order
    */
    pricing: {
      paid: Boolean;
 
      commision_fees: Number;
 
      restaurant_fees: Number;
 
      delivering_fees: Number;

      discount: Number;

      total: Number
    };

    /**
     * Address to deliver
     */

    address: {
      country: string;
 
      postal_code: string;
 
      town: string;
 
      address1: string;

      address2: string;

      longitude: string;

      latitude: string;
    };

    /**
     * Is the order currently available ?
     */
    delivered: boolean;

    /**
    * Menus contained in order
    */
    menus: Array<any>;
}

/**
 * Order object for creation
 */
class OrderCreationParams {
  /**
  * Uniq indentifier
  */
  date: Date;

  /**
   * Restaurant uniq indentifier reference
   */
  restaurant_id: number;

  /**
  * Restaurant uniq indentifier reference
  */
  customer_id: number;

  /**
  * Restaurant uniq indentifier reference
  */
  deliverer_id?: number;
  
  /**
   * Name which represent the order
   */
  status: string;
  
  /**
  * Pricing contained in order
  */
  pricing: {
    paid: Boolean;

    commision_fees: Number;

    restaurant_fees: Number;

    delivering_fees: Number;

    discount: Number;

    total: Number
  };

  /**
   * Address to deliver
   */

  address: {
    country?: string;

    postal_code?: string;

    town?: string;

    address1?: string;

    address2?: string;

    longitude?: string;

    latitude?: string;
  };


  /**
   * Is the order currently available ?
   */
  delivered: boolean;

  /**
  * Menus contained in order
  */
   menus: Array<any>;
}

  /**
 * Order object for update
 */
 class OrderUpdateParams {
  /**
  * Uniq indentifier
  */
  date?: Date;

  /**
   * Restaurant uniq indentifier reference
   */
  restaurant_id?: number;

  /**
  * Restaurant uniq indentifier reference
  */
  customer_id?: number;

  /**
  * Restaurant uniq indentifier reference
  */
  deliverer_id?: number;
  
  /**
   * Name which represent the order
   */
  status?: string;
  
  /**
  * Pricing contained in order
  */
  pricing?: {
    paid: Boolean;

    commision_fees: Number;

    restaurant_fees: Number;

    delivering_fees: Number;

    discount: Number;

    total: Number
  };

  /**
   * Address to deliver
   */

  address?: {
    country?: string;

    postal_code?: string;

    town?: string;

    address1?: string;

    address2?: string;

    longitude?: string;

    latitude?: string;
  };

  /**
   * Is the order currently available ?
   */
  delivered?: boolean;

  /**
  * Menus contained in order
  */
   menus?: Array<any>;
}

const OrderSchema = new mongoose.Schema({
  date: Date,
  restaurant_id: Number,
  customer_id: Number,
  deliverer_id: Number,
  status: String,
  pricing: {
    paid: Boolean,
    commision_fees: Number,
    restaurant_fees: Number,
    delivering_fees: Number,
    discount: Number,
    total: Number,
  },
  address: {
    country: String,
    postal_code: String,
    town: String,
    address1: String,
    address2: String,
    longitude: String,
    latitude: String,
  },
  delivered: Boolean,
  menus: Array,
});


OrderSchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const OrderModel = mongoose.model('orders', OrderSchema);

export { OrderModel, Order, OrderCreationParams, OrderUpdateParams }