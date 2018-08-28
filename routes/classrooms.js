var router = require('express').Router();

const classroomController = require('../controllers/classroomController')

router.get('/', classroomController.findAll);
router.post('/', classroomController.create);
router.get('/:id', classroomController.findById);

module.exports = router;
