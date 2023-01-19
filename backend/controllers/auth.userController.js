const config = require('../validations/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;

const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Recipe = require("../models/recipe");
//registration post request handling

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }

    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept")

    const password = req.body.password;
    const salt = await bcrypt.genSalt(6);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        passwordHash: passwordHash,
    });

    const user = await doc.save();
    res.json(user)
}

exports.loginUser = async(req, res) => {
    const user = await User.findOne({ email: req.body.email})
    if (!user) return res.send('Email not found')

    const passwordValid = bcrypt.compareSync(
        req.body.password,
        User.passwordHash
    )

    if (!passwordValid) return res.send('Invalid password')

    res.send({
        email: user.email
    })
};


// const password = req.body.password;
// User.findOne({ email: req.body.email })
//     .then(user => {
//         if (user) {
//             bcrypt.compare(password, User.passwordHash, function (err, result) {
//                 if (result == true) {
//                     res.json({user: user, message: "success" });
//                     let token = jwt.sign({id: user.id}, config.secret, {
//                         expiresIn: 86400 //24 hours
//                     })
//
//                     let authorities = [];
//
//                     for (let i = 0; i < user.roles.length; i++) {
//                         authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
//                     }
//                     res.header(
//                         "Access-Control-Allow-Headers",
//                         "x-access-token, Origin, Content-Type, Accept")
//                     res.status(200).send({
//                         id: user._id,
//                         roles: authorities,
//                         accessToken: token
//                     });
//                 } else {
//                     res.json({ message: "Wrong username/password combination!" });
//                 }
//             });
//         } else {
//             res.json({ message: "User doesn't exist" });
//         }
//     })
//     .catch(err => res.status(400).json('Error: ' + err));


// module.exports = {registerUser}
//     let token = jwt.sign({id: user.id}, config.secret, {
//         expiresIn: 86400
//     })
//
//     User.findOne({email: req.body.email})
//         .then(user => {
//             const comparePass = bcrypt.compareSync(req.body.password, User.passwordHash);
//             if(user && comparePass){
//                 res.status(200).send({
//                     id: user._id,
//                     user: user,
//                     accessToken: token,
//                     message: "success"
//                 })
//                 res.header(
//                     "Access-Control-Allow-Headers",
//                     "x-access-token, Origin, Content-Type, Accept"
//                 )
//             } else {
//                 res.json({ message: "Wrong username/password combination!" });
//             }
//
//         })








// User.findOne({
//     email: req.body.email
// })
//     .populate("roles", "-__v")
//     .exec((err,user) => {
//         if(err){
//             return res.status(500).send({message: "User not found dolbaeb"})
//         }
//         if(!user){
//             return res.status(404).send({message: "Idiot 404"})
//         }
//         const passwordValid = () => {
//             bcrypt.compareSync(req.body.password, User.passwordHash)
//         }
//         if(!passwordValid){
//             return res.status(401).send({
//                 accessToken: null,
//                 message: 'Invalid password loh'
//             });
//         }
//         let token = jwt.sign({id: user.id}, config.secret, {
//             expiresIn: 86400 //24 hours
//         })
//
//         let authorities = [];
//
//         for (let i = 0; i < user.roles.length; i++) {
//             authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
//         }
//         res.header(
//             "Access-Control-Allow-Headers",
//             "x-access-token, Origin, Content-Type, Accept")
//         res.status(200).send({
//             id: user._id,
//             roles: authorities,
//             accessToken: token
//         });
//     });