const Card = require('../models/Card')
const Upload = require('../helpers/upload')

const create = (req, res, next) =>
 Upload(req).then(input => Card.create(input))
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al registrar Tarjeta'}))

const read = (req, res, next) =>
 Card.find(req.params.id ? {_id: req.params.id} : {})
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al obtener Tarjeta'}))

const update = (req, res, next) =>
 Card.findByIdAndUpdate(req.params.id, req.body, {new: true})
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al actualizar Tarjeta'}))

const destroy = (req, res, next) =>
 Card.findByIdAndRemove(req.params.id)
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al eliminar Tarjeta'}))

module.exports = {
    create,
    read,
    update,
    destroy
}
