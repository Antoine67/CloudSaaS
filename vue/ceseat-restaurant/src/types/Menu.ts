export default interface ProductMenu {
  step?: string;
  product_id?: any;
  quantity?: number;
}

export default interface Menu {
    id?: any;
    name?: string;
    description?: string;
    available?: boolean;
    restaurant_id?: number;
    price?: number;
    products?: Array<ProductMenu>
  }