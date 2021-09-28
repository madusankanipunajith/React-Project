const express = require('express');
const bootcampControllers = require('../controllers/bootcampControllers');
const router = express.Router();

router.route('/').get(bootcampControllers.getAllBootCamps).post(bootcampControllers.createNewBootCamp);

router.route('/:id').put(bootcampControllers.updateBootcampById).delete(bootcampControllers.deleteBootCampById);

module.exports = router;