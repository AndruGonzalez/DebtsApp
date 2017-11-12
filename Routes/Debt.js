'use strict'

const router = require('express').Router()
const DebtController = require('../controllers/Debt')

router
 .post('/Debt', DebtController.create)
 .get('/Debt/:id?', DebtController.read)
 .put('/Debt/:id', DebtController.update)
 .delete('/Debt/:id', DebtController.destroy)

module.exports = router
