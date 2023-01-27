const express = require('express');
const router = express.Router();

const  { show } = require('../controllers/index.controller')

router.get('/', show)

module.exports = router