var router = require('express').Router();

const classEventController = require('../controllers/classEventController')

router.get('/', classEventController.all);
router.post('/', classEventController.create);

module.exports = router;
