var router = require('express').Router();

const classroomController = require('../controllers/classroomController')

router.post('/assigns', classroomController.assignUser);
router.get('/assigns', classroomController.findAssignAll);

router.get('/', classroomController.findAll);
router.get('/:id', classroomController.findById);
router.post('/', classroomController.create);

module.exports = router;
