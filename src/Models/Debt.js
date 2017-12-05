import mongoose, {Schema} from 'mongoose'

const DebtSchema = Schema({
  Amount: Number,
  Fees: Number,
  Total: Number,
  PayDay: Date,
  NextRechargeDate: Date,
  NearestPayPlace: Text,
  Name: Text,
  Enterprise: Text,
  DebtType: { type: Schema.ObjectId, ref: 'DebtType'}
})

export default mongoose.model('Debt', DebtSchema, 'Debt')
