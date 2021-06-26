export default interface Product {
  id?: number;
  name?: string;
  description?: string;
  ingredients?: Array<string>;
  restaurant_id?: number;
  price?: number;
  available?: boolean;
}