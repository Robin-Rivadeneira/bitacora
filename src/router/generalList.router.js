const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')

const { show } = require('../controllers/generalList.controller')

router.get('/generalList/', isLoggedIn, show)

module.exports = router