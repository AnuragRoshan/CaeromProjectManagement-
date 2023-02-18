const router = require('express').Router();

// console.log("OK");
router.use('/user', require('../controller/userAPI'));

module.exports = router;