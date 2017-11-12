'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let UserSchema = Schema({
  name: String,
  email: String,
  password: String,
  debt: { type: Schema.ObjectId, ref: 'Debt'},
  card: { type: Schema.ObjectId, ref: 'Card'},
})

module.exports = mongoose.model('User', UserSchema)
