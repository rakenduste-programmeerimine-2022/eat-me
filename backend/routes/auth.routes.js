const express = require('express')
const router = express.Router()
const {registerUser} = require('../controllers/auth.userController.js')
const {loginUser} = require('../controllers/auth.userController.js')
// const { verifySignUp } = require("../middlewares/verifySingUp");

router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router;