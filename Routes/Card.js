'use strict'

const router = require('express').Router()
const CardController = require('../controllers/Card')

router
 .post('/Card', CardController.create)
 .get('/Card/:id?', CardController.read)
 .put('/Card/:id', CardController.update)
 .delete('/Card/:id', CardController.destroy)

module.exports = router
