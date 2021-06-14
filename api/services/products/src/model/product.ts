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
     * Price in euros (€)
     */
    price?: number;

    /**
     * Picture URI
     */
    picture?: string;

    /**
     * Ingredients list composing product
     */
    ingredients?: Array<string>;

    /**
     * Is the product currently available ?
     */
    available: boolean;
}

const ProductSchema = new mongoose.Schema({
	  description: String,
	  name: String,
    price: Number,
    picture: String,
    ingredients: Array,
    category: String,
    available: Boolean
});


ProductSchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const ProductModel = mongoose.model('products', ProductSchema);

export { ProductModel, IProduct }