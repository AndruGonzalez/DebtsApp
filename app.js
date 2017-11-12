'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const os = require('os')
const app = express()

// cargar rutas

const user_routes = require('./routes/user')
const card_routes = require('./routes/Card')
const debt_routes = require('./routes/Debt')
const debtType_routes = require('./routes/DebtType')

app
 .use(cors())
 .use(bodyParser.urlencoded({extended:false}))
 .use(bodyParser.json())
 .use('/uploads', express.static(os.tmpdir()))
 .use('/api', user_routes)
 .use('/api', card_routes)
 .use('/api', debt_routes)
 .use('/api', debtType_routes)

module.exports = app;
