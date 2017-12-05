import upload from '../helpers/upload'

const create = (req, res, next) =>
  upload(req).then(input => req.models.DebtType.create(input))
  .then(result => res.status(200).json(result))
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error'})
  })

const read = (req, res, next) =>
  req.models.DebtType.find(req.params.id ? {_id: req.params.id} : {})
  .populate('Debt')
  .then(result => res.status(200).json(result))
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error'})
  })

const update = (req, res, next) =>
  upload(req).then(input => req.models.DebtType.findByIdAndUpdate(req.params.id, input, {new: true}))
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'Error'}))

const destroy = (req, res, next) =>
  req.models.DebtType.findByIdAndRemove(req.params.id)
  .then(result => res.status(200).json(result))
  .catch(err => res.status(500).json({message: 'Error'}))

module.exports = {create, read, update, destroy}
