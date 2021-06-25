import Product from "./Product"

export default interface Menu {
    id?: string;
    title?: string;
    description?: string;
    products?: Array<Product>
  }