import * as mongoose from 'mongoose';

interface IUser extends mongoose.Document {
	_id: string;
	name: string;
    description: string;
    price?: number;
    picture?: string;
    ingredients?: Array<string>;
    category?: string;
    available: boolean;
}

const UserSchema = new mongoose.Schema({
	description: String,
	name: String,
    price: Number,
    picture: String,
    ingredients: Array,
    category: String,
    available: Boolean
});


UserSchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const UserModel = mongoose.model<IUser>('users', UserSchema);

export { UserModel, IUser }