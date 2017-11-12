'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let CardSchema = Schema({
  Company: String,
  Type: String,
  Cash: Number,
  CardNumber: Number,
  User: { type: Schema.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Card', CardSchema)
