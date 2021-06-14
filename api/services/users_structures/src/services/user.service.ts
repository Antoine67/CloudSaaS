import { UserModel, IUser } from "../model/user";
import {Tags} from 'tsoa';


export type UserCreationParams = Omit<IUser, "id">;
export type UserUpdateParams = Partial<Omit<IUser, "id">>;

export class UsersService {

  public async getAll(): Promise<IUser[]> {
    try {
      let items: any = await UserModel.find({})
      //items = items.map((item: { _id: string; description: string; available: boolean }) => { return { _id: item._id, description: item.description, available: item.available } })
      return items;
    } catch (err) {
      console.error('Caught error', err)
      return [];
    }
  }

  public async create(userCreationParams: UserCreationParams): Promise<boolean> {

    const item = new UserModel(userCreationParams)
    console.info(userCreationParams)
    let success = false;
    await item.save(function(err, user) {
        if (err) success = false;
        else success = true;
    });

    return success;
  }

  public async update(id: string, userUpdateParams: UserUpdateParams): Promise<void> {
    await UserModel.findByIdAndUpdate({ _id: id }, userUpdateParams)
  }

  public async delete(id: string): Promise<void> {
    await UserModel.findByIdAndRemove(id)
  }

  public async get(id: string): Promise<any> {
    return await UserModel.findById(id)
  }

}