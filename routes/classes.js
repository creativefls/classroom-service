var router = require('express').Router();

const classEventController = require('../controllers/classEventController')

router.get('/', classEventController.findAll);
router.post('/', classEventController.create);
router.get('/:id', classEventController.findById);

module.exports = router;
