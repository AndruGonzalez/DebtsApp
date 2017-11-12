const Debt = require('../models/Debt')
const Upload = require('../helpers/upload')

const create = (req, res, next) =>
    Upload(req).then(input => Debt.create(input))
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: 'Error al crear Deuda'}))

const read = (req, res, next) =>
    Debt.find(req.params.id ? {_id: req.params.id} : {})
    .populate('Card') 
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: 'Error al obtener Deuda'}))

const update = (req, res, next) =>
    Debt.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: 'Error al editar Deuda'}))

const destroy = (req, res, next) =>
    Debt.findByIdAndRemove(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: 'Error al eliminar Deuda'}))

module.exports = {
    create,
    read,
    update,
    destroy
}
