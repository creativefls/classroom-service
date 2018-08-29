var router = require('express').Router();

const classroomController = require('../controllers/classroomController')

router.get('/', classroomController.findAll);
router.get('/:id', classroomController.findById);

router.post('/', classroomController.create);
router.post('/assign', classroomController.assignUser);

module.exports = router;
