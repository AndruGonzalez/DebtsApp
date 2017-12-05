import boom from 'boom'
import {sign} from '../helpers/Users'
import upload from '../helpers/upload'

export const auth = (req, res, next) =>
  req.models.User.authenticate(req.body)
  .then(jwt => res.json(jwt))
  .catch(err => {
    if (err.toString().match(/Bad Credentials/g)) return next(boom.wrap(err, 400))
    next(boom.wrap(err, 500))
  })

export const create = (req, res, next) =>
  req.models.User.create({...req.body, user: req.user._id})
  .then(User => res.json(User))
  .catch(err => next(boom.wrap(err, 400)))

export const list = (req, res, next) =>
  req.models.User.find({}, '-password').exec()
  .then(User => res.json(User))
  .catch(err => next(boom.wrap(err, 500)))

export const show = (req, res, next) =>
  req.models.User.findOne({...req.query}, '-password').exec()
  .then(User => res.json(User))
  .catch(err => next(boom.wrap(err, 500)))

export const register = (req, res, next) => {
  if (!req.body) return next(boom.wrap(new Error('no data'), 400))
  const role = 'role_user'
  return upload(req).then(input => req.models.User.create({...input, role}))
  .then(User => sign(User))
  .then(jwt => res.json(jwt))
  .catch(err => next(boom.wrap(err, 400)))
}
