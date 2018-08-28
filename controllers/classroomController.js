const { Classroom } = require('../models')

module.exports = {
  create: function (req, res, next) {
    Classroom.create({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      timeBegin: req.body.timeBegin,
      timeEnd: req.body.timeEnd,
      materialUrl: req.body.materialUrl,
      additionalName: req.body.additionalName,
      quota: req.body.quota,
      classEventId: req.body.classEventId
    }).then(classroom => {
      res.json(classroom)
    }).catch(err => {
      res.send(err)
    })
  },
  findAll: function (req, res, next) {

  },
  findById: function (req, res, next) {

  }
}
