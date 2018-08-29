const { Classroom, ClassEvent, ClassroomAssign } = require('../models')
const { getClassroomById, assignUserToClassroom }  =require('../factory')

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
    res.send({
      id: req.params.id
    })
  },
  assignUser: async function (req, res, next) {
    const userId = req.body.userId
    const classroomId = req.body.classroomId

    try {
      let classroomStat = await getClassroomById(classroomId)

      if (classroomStat.isClosed) {
        throw {
          status: 403,
          name: 'http',
          message: 'classroom closed'
        }
      }

      let response = await assignUserToClassroom({ userId, classroomId })
      res.send(response)
    } catch (error) {
      res.status(error.status || 500).send({
        error: error.name,
        message: error.message
      })
    }
  },
  findAssignAll: function (req, res, next) {
    ClassroomAssign.findAll({
      include: [{
        model: Classroom,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [{
          model: ClassEvent,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          },
        }]
      }]
    }).then(items => {
      res.json(items)
    }).catch(err => {
      res.status(500).send(err)
    })
  }
}
