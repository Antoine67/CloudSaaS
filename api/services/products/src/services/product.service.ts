import { ProductModel, IProduct } from "../model/product";


//export type ProductCreationParams = Pick<IProduct, "name" | "description" | "available">;
//export type ProductUpdateParams = Exclude<IProduct, "id">;

export class ProductsService {

  public async getAll(): Promise<IProduct[]> {
    try {
      let items: any = await ProductModel.find({})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async create(productCreationParams: IProduct): Promise<boolean> {

    const item = new ProductModel({ name: productCreationParams.name, email: productCreationParams.description })
    await item.save()
    return true;
  }

  public async update(id: string, productUpdateParams: IProduct): Promise<void> {
    await ProductModel.findByIdAndUpdate({ _id: id }, productUpdateParams)
  }

  public async delete(id: string): Promise<void> {
    await ProductModel.findByIdAndRemove(id)
  }

  public async get(id: string): Promise<any> {
    return await ProductModel.findById(id)
  }

}