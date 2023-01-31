const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')



const { show, send, list, detalle, traer, update } = require('../controllers/matricula.controller')

const { showMantenimiento, sendMantenimiento, listMantenimiento, bringMantenimiento, updateMantenimiento, detalleMantenimiento } = require('../controllers/mantenimiento.controller');

const { showOrderWork } = require('../controllers/ordenTabajo.controller');

router.get('/mantenimiento/add/:id', isLoggedIn, showMantenimiento)
router.post('/mantenimiento/add/:id', isLoggedIn, sendMantenimiento)
router.get('/mantenimiento/list/:id', isLoggedIn, listMantenimiento)
router.get('/mantenimiento/detailList/:id', isLoggedIn, detalleMantenimiento)
router.get('/mantenimiento/edit/:id', isLoggedIn, bringMantenimiento)
router.post('/mantenimiento/edit/:id', isLoggedIn, updateMantenimiento)


router.get('/matricula/add/:id', isLoggedIn, show)
router.post('/matricula/add/:id', isLoggedIn, send)
router.get('/matricula/list/:id', isLoggedIn, list)
router.get('/matricula/detailList/:id', isLoggedIn, detalle)
router.get('/matricula/edit/:id', isLoggedIn, traer)
router.post('/matricula/edit/:id', isLoggedIn, update)

router.get('/ordenTrabajo/add/:id', isLoggedIn, showOrderWork)

module.exports = router