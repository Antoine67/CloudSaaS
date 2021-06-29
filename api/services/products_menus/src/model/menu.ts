import * as mongoose from 'mongoose';


interface ProductMenu {
  step: String;

  product_id: number;

  quantity: number;
}

/**
 * Menu objects allow merchants to show their available
 * menus for sale
 */
interface IMenu {
   /**
    * Uniq indentifier
    */
    id: string;
    
    /**
     * Name which represent the menu
     */
    name: string;
    
    /**
     * Short text describing the menu
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
     * Is the menu currently available ?
     */
    available: boolean;

    /**
     * Products contained on the menu
     * TODO
     */
    products?: ProductMenu[] 
}

/**
 * Menu for creation
 */
 interface MenuCreationParams {
   
   /**
    * Name which represent the menu
    */
   name: string;
   
   /**
    * Short text describing the menu
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
    * Is the menu currently available ?
    */
   available: boolean;

   /**
    * Products contained on the menu
    * TODO
    */
   products?: ProductMenu[] 
}

/**
 * Menu for update
 */
 interface MenuUpdateParams {
   
   /**
    * Name which represent the menu
    */
   name?: string;
   
   /**
    * Short text describing the menu
    */
   description?: string;

   /**
    * Restaurant uniq indentifier reference
    */
   restaurant_id?: number;

   /**
    * Price in euros (€)
    */
   price?: number;

   /**
    * Picture URI
    */
   //picture?: string;

   /**
    * Is the menu currently available ?
    */
   available?: boolean;

   /**
    * Products contained on the menu
    * TODO
    */
   products?: ProductMenu[]
}


const MenuSchema = new mongoose.Schema({
  name: String,
  description: String,
  restaurant_id: Number,
  price: Number,
  available: Boolean,
  //picture: String,
  products: Array
});


MenuSchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const MenuModel = mongoose.model('menus', MenuSchema);

export { MenuModel, IMenu, MenuCreationParams, MenuUpdateParams, ProductMenu }