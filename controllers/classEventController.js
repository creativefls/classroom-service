const { ClassEvent } = require('../models')

module.exports = {
  create: function (req, res, next) {
    ClassEvent.create({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      openReg: req.body.openReg,
      closeReg: req.body.closeReg,
      scope: req.body.scope,
      classType: req.body.classType
    }).then(classEvent => {
      res.json(classEvent)
    }).catch(err => {
      res.send(err)
    })
  },
  findAll: function (req, res, next) {
    ClassEvent.findAll().then(classEvents => {
      res.json(classEvents)
    }).catch(err => {
      res.send(err)
    })
  },
  findById: function (req, res, next) {
    ClassEvent.findAll({
      where: { id: req.params.id }
    }).then(classEvent => {
      res.json(classEvent)
    }).catch(err => {
      res.send(err)
    })
  }
}
