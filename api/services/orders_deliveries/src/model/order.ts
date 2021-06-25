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
     * Name which represent the order
     */
    name: string;
    
    /**
     * Short text describing the order
     */
    description: string;

    /**
     * Restaurant uniq indentifier reference
     */
    restaurant_id: number;

    /**
     * Price in euros (€)
     */
    price?: number;

    /**
     * Picture URI
     */
    //picture?: string;

    /**
     * Is the order currently available ?
     */
    available: boolean;

    /**
     * Ingredients list composing order
     */
    ingredients?: Array<string>;

    
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

export { OrderModel, IOrder }