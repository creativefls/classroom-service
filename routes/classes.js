var router = require('express').Router();

const classEventController = require('../controllers/classEventController')

router.post('/', classEventController.create);

module.exports = router;
