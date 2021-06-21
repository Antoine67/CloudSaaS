import * as mongoose from 'mongoose';

/**
 * Rating allow user to rate a restaurant or a deliverer
 * after an order completed
 */
interface IRating {
   /**
    * Uniq indentifier
    */
    id: string;
    
    /**
     * Value of the rate from the user
     */
    value: number;
    
    /**
     * Short comment with the rate
     */
    comment: string;

    /**
     * The type of the entity rated
     */
    type: string;

    /**
     * Rated entity uniq indentifier reference 
     */
    foreign_id: number;

    /**
     * Sender uniq indentifier reference
     */
    sender_id: number;
    
}

const RatingSchema = new mongoose.Schema({
  value: Number,
  comment: String,
  type: String,
  foreign_id: Number,
  sender_id: Number,
});


RatingSchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const RatingModel = mongoose.model('ratings', RatingSchema);

export { RatingModel, IRating }