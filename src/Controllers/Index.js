import {Router} from 'express'
import {err, notFound} from '../middlewares/error'
import authorize from '../middlewares/authorize'
import * as User from './User'
import * as Debt from './Debt'
import * as DebtType from './DebtType'
import * as Card from './Card'

const router = Router()
  .post('/login', User.auth)
  .post('/register', User.register)
  .use(authorize)
  .get('/artists/:id?', Debt.read)
  .post('/artists', Debt.create)
  .put('/artists/:id', Debt.update)
  .delete('/artists/:id', Debt.destroy)
  .post('/albums', DebtType.create)
  .get('/albums/:id?', DebtType.read)
  .put('/albums/:id', DebtType.update)
  .delete('/albums/:id', DebtType.destroy)
  .post('/songs', Card.create)
  .get('/songs/:id?', Card.read)
  .put('/songs/:id', Card.update)
  .delete('/songs/:id', Card.destroy)
  .use('*', notFound)
  .use(err)
  .use(authorize)

export default router
