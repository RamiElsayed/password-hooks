const { Router  } = require("express");


const router =  Router();

const auth = require('./auth');

router.use('/auth', auth)

module.exports = router;