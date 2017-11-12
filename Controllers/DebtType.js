const DebtType = require('../models/DebtType')
const Upload = require('../helpers/upload') // importa el helper

const create = (req, res, next) =>
    Upload(req).then(input => DebtType.create(input))
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: 'Error'}))

const read = (req, res, next) =>
    DebtType.find(req.params.id ? {_id: req.params.id} : {})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: 'Error'}))

const update = (req, res, next) =>
    DebtType.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: 'Error'}))

const destroy = (req, res, next) =>
    DebtType2.findByIdAndRemove(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: 'Error'}))

module.exports = {
 create,
 read,
 update,
 destroy
}
