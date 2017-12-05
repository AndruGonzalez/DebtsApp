import mongoose, {Schema} from 'mongoose'

let DebtTypeSchema = Schema({
  Debt: { type: Schema.ObjectId, ref: 'Debt'},
  OnTime: Boolean,
  LateDebt: Boolean,
})

export default mongoose.model('DebtType', DebtTypeSchema, 'DebtType')
