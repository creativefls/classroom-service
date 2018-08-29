const { Classroom, ClassEvent, ClassroomAssign } = require('../models')

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
      res.status(500).send(err)
    })
  },
  findAll: function (req, res, next) {
    Classroom.findAll({
      include: [
        {
          model: ClassEvent,
          // as: 'acaraku',
          // where: { scope: 'fls2018' },
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'id']
          }
        }
      ]
    }).then(classroom => {
      res.json(classroom)
    }).catch(err => {
      res.send(err)
    })
  },
  findById: function (req, res, next) {

  },
  assignUser: function (req, res, next) {
    ClassroomAssign.create({
      userId: req.body.userId,
      classroomId: req.body.classroomId
    }).then(item => {
      res.json(item)
    }).catch(err => {
      res.status(500).send(err)
    })
  },
}
