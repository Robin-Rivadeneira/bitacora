const express = require('express');
const router = express.Router();

const { show, register, showLogin, login, logout, showUpdatePassword, updatePassword, showProfile } = require('../controllers/register.controller')

const {isLoggedIn} = require('../lib/auth')

router.get('/register', show)
router.post('/register', register)
router.get('/login', showLogin)
router.post('/login', login)
router.get('/logout', logout)
router.get('/updatePassword', showUpdatePassword)
router.post('/updatePassword', updatePassword)
router.get('/profile/:id', isLoggedIn, showProfile)


module.exports = router