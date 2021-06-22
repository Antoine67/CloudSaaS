import * as mongoose from 'mongoose';

/**
 * Delivery objects allow merchants and consumer to know
 * the state the state of the delivery
 */
interface IDelivery {
   /**
    * Uniq indentifier
    */
    id: string;
    
    /**
     * Order uniq indentifier reference
     */
    order_id: number;
    
    /**
     * The date of creation of the delivery
     */
    date: Date;

    /**
     * TODO geospatial queries
     */

    /**
     * Is the delivery currently available ?
     */
    status: String;    
}

/**
 * Delivery object for creation
 */
 interface DeliveryCreationParams {
   /**
    * Order uniq indentifier reference
    */
   order_id: number;
   
   /**
    * The date of creation of the delivery
    */
   date: Date;

   /**
    * TODO geospatial queries
    */

   /**
    * Is the delivery currently available ?
    */
   status: String;
}

/**
 * Delivery object for update
 */
 interface DeliveryUpdateParams {
   /**
    * Order uniq indentifier reference
    */
   order_id?: number;
   
   /**
    * The date of creation of the delivery
    */
   date?: Date;

   /**
    * TODO geospatial queries
    */

   /**
    * Is the delivery currently available ?
    */
   status?: String;
}

const DeliverySchema = new mongoose.Schema({
  order_id: Number,
  date: Date,
  status: String,
});


DeliverySchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const DeliveryModel = mongoose.model('deliveries', DeliverySchema);

export { DeliveryModel, IDelivery, DeliveryCreationParams, DeliveryUpdateParams }