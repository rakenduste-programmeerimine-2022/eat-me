const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const User = require('../models/user')

//registration post request handling

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(6);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        passwordHash,
    });

    const user = await doc.save();
    res.json(user)
}

const loginUser = async(req, res) => {

}


module.exports = {registerUser}
