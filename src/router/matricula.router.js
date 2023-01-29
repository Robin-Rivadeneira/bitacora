const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')

const { show, send, list, detalle, traer, update } = require('../controllers/matricula.controller')

router.get('/matricula/add/:id', isLoggedIn, show)
router.post('/matricula/add/:id', isLoggedIn, send)
router.get('/matricula/list/:id', isLoggedIn, list)
router.get('/matricula/detailList/:id', isLoggedIn, detalle)
router.get('/matricula/edit/:id', isLoggedIn, traer)
router.post('/matricula/edit/:id', isLoggedIn, update)

module.exports = router