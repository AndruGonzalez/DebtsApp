'use strict'

const router = require('express').Router()
const DebtTypeController = require('../controllers/DebtType')

router
 .post('/DebtType', DebtTypeController.create)
 .get('/DebtType/:id?', DebtTypeController.read)
 .put('/DebtType/:id', DebtTypeController.update)
 .delete('/DebtType/:id', DebtTypeController.destroy)

module.exports = router
