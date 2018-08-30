const { Classroom, ClassEvent, ClassroomAssign } = require('../models')

async function getClassroomById (classroomId) {
  let result = await Classroom.findById(classroomId, {
    include: [{
      model: ClassEvent,
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
    }]
  })

  return result
}

async function assignUserToClassroom ({ userId, classroomId}) {
  let result = ClassroomAssign.create({
    userId,
    classroomId
  })

  return result
}

async function deleteClassRoom (classroomId) {
  return await Classroom.destroy({
    where: { id: classroomId },
    limit: 1
  })
}

module.exports = {
  getClassroomById,
  assignUserToClassroom,
  deleteClassRoom
}
