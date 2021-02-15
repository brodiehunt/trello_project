const express = require('express')
const router = express.Router();
const {signInCreate, registerCreate, logout} = require('../controllers/auth_controller')


router.post('/register', registerCreate)

router.post('/login', signInCreate);

router.get('/logout', logout);


module.exports = router;

