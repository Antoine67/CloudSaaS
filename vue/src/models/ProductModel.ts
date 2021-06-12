import Model from "./Model";

export default class ProductModel extends Model {
  firstname!: string;
  lastname!: string;
  age!: number;
  // Set the resource route of the model
  resource() {
    return "products";
  }

  // Computed properties are reactive -> product.fullName
  // Make sure to use "get" prefix
  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  // Method -> product.makeBirthday()
  makeBirthday() {
    return (this.age += 1);
  }
}
