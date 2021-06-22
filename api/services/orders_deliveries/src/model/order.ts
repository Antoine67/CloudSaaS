import * as mongoose from 'mongoose';

/**
 * Order objects allow merchants to show their available
 * meals/dessert/... for sale
 */
interface IOrder {
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
      paid: String;
 
      commision_fees: Object;
 
      restaurant_fees: Number;
 
      delivering_fees: Number;

      discount: Number;

      total: Number
    };

    /**
     * Is the order currently available ?
     */
    delivered: boolean;

    /**
    * Products contained in order
    */
    products: {
      step: String;

      product_id: Object;

      quantity: Number;
    };
}

/**
 * Order object for creation
 */
interface OrderCreationParams {
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
    paid: String;

    commision_fees: Object;

    restaurant_fees: Number;

    delivering_fees: Number;

    discount: Number;

    total: Number
  };

  /**
   * Is the order currently available ?
   */
  delivered: boolean;

  /**
  * Products contained in order
  */
  products: {
    step: String;

    product_id: Object;

    quantity: Number;
  };
}

  /**
 * Order object for update
 */
 interface OrderUpdateParams {
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
    paid: String;

    commision_fees: Object;

    restaurant_fees: Number;

    delivering_fees: Number;

    discount: Number;

    total: Number
  };

  /**
   * Is the order currently available ?
   */
  delivered?: boolean;

  /**
  * Products contained in order
  */
  products?: {
    step: String;

    product_id: Object;

    quantity: Number;
  };
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
  delivered: Boolean,
  products: {
    step: String,
    product_id:  mongoose.Schema.Types.ObjectId ,
    quantity: Number,
  },
});


OrderSchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const OrderModel = mongoose.model('orders', OrderSchema);

export { OrderModel, IOrder, OrderCreationParams, OrderUpdateParams }