import { MenuModel, IMenu, MenuCreationParams, MenuUpdateParams } from "../model/menu";
import {Tags} from 'tsoa';


export class MenusService {

  public async getAll(): Promise<IMenu[]> {
    try {
      let items: any = await MenuModel.find({})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async create(menuCreationParams: MenuCreationParams): Promise<boolean> {

    const item = new MenuModel(menuCreationParams)
    console.info(menuCreationParams)
    let success = false;
    await item.save(function(err, menu) {
        if (err) success = false;
        else success = true;
    });

    return success;
  }

  public async update(id: string, menuUpdateParams: MenuUpdateParams): Promise<void> {
    await MenuModel.findByIdAndUpdate({ _id: id }, menuUpdateParams)
  }

  public async delete(id: string): Promise<void> {
    await MenuModel.findByIdAndRemove(id)
  }

  public async get(id: string): Promise<any> {
    return await MenuModel.findById(id)
  }

}