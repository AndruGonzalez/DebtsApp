import mongoose, {Schema} from 'mongoose'

 const CardSchema = Schema({
  Company: String,
  Type: String,
  Cash: Number,
  CardNumber: Number,
  User: { type: Schema.ObjectId, ref: 'User'}
})

export default mongoose.model('Card', CardSchema, 'Card')
