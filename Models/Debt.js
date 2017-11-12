'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let DebtSchema = Schema({
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

module.exports = mongoose.model('Debt', DebtSchema)
