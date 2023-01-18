
const express = require('express')
const router = express.Router()
const {registerUser} = require('../controllers/userController.js')
// import {registerValidator} from "../validations/auth";


router.post('/register', registerUser)
// router.post('/login', loginUser)


module.exports = router;
