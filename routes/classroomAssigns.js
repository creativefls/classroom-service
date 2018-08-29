var router = require('express').Router();

const classroomAssignController = require('../controllers/classroomAssignController')

router.get('/', classroomAssignController.findAll);
router.post('/', classroomAssignController.create);
router.get('/:id', classroomAssignController.findById);

module.exports = router;
