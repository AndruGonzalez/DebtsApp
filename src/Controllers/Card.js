import upload from '../helpers/upload'

const create = (req, res, next) =>
upload(req).then(input => req.models.Card.create(input))
  .then(result => res.status(200).json(result))
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error al añadir Tarjeta'})
  })

const read = (req, res, next) =>
 Card.find(req.params.id ? {_id: req.params.id} : {})
 .then(result => res.status(200).json(result))
 .catch(err => {
     console.log(err)
     res.status(500).json({message: 'Error al añadir Tarjeta'})
   })

const update = (req, res, next) =>
upload(req).then(input => req.models.Card.findByIdAndUpdate(req.params.id, input, {new: true}))
.then(result => res.status(200).json(result))
.catch(err => res.status(500).json({message: 'Error al modificar Tarjeta'}))

const destroy = (req, res, next) =>
req.models.Card.findByIdAndRemove(req.params.id)
 .then(result => res.status(200).json(result))
 .catch(err => res.status(500).json({message: 'Error al eliminar Tarjeta'}))

module.exports = {
    create,
    read,
    update,
    destroy
}
