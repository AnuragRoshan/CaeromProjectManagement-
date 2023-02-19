const router = require('express').Router();

// console.log("OK");
router.use('/user', require('../controller/userAPI'));
router.use('/project', require('../controller/projectAPI'));
router.use('/task', require('../controller/taskAPI'));

module.exports = router;