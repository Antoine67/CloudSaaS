
import Product from "./product"

export default interface Menu {
    id?: any;
    name?: string;
    description?: string;
    available?: boolean;
    restaurant_id?: number;
    price?: number;
    products?: Array<Product>
  }