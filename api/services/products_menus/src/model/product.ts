import * as mongoose from 'mongoose';

/**
 * Product objects allow merchants to show their available
 * meals/dessert/... for sale
 */
interface IProduct {
   /**
    * Uniq indentifier
    */
    id: string;
    
    /**
     * Name which represent the product
     */
    name: string;
    
    /**
     * Short text describing the product
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
     * Is the product currently available ?
     */
    available: boolean;

    /**
     * Ingredients list composing product
     */
    ingredients?: Array<string>;

    
}

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  restaurant_id: Number,
  price: Number,
  available: Boolean,
  //picture: String,
  ingredients: [{
      type: String
  }],
});


ProductSchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const ProductModel = mongoose.model('products', ProductSchema);

export { ProductModel, IProduct }