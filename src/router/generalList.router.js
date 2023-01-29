const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')

const { show, showCars, showCarsAdd, sendCarsadd } = require('../controllers/generalList.controller')

router.get('/generalList/', isLoggedIn, show)
router.get('/cars/list/:id', isLoggedIn, showCars);
router.get('/cars/add/:id', isLoggedIn, showCarsAdd);
router.post('/cars/add/:id', isLoggedIn, sendCarsadd);

module.exports = router