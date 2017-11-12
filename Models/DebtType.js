'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema //permite crear un objeto de tipo schema en el cual se va a guardar una colección de datos
let DebtTypeSchema = Schema({
  Debt: { type: Schema.ObjectId, ref: 'Debt'},
  OnTime: Boolean,
  LateDebt: Boolean,
})

module.exports = mongoose.model('DebtType', DebtTypeSchema)
