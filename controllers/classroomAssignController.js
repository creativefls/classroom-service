const { ClassroomAssign } = require('../models')

module.exports = {
  create: function (req, res, next) {
    ClassroomAssign.create({
      userId: req.body.userId,
      classroomId: req.body.classroomId
    }).then(item => {
      res.json(item)
    }).catch(err => {
      res.status(500).send(err)
    })
  },
  findAll: function (req, res, next) {
    res.send('assigasdfadfn')
  },
  findById: function (req, res, next) {

  }
}
