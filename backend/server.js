
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const usersRouter = require('./routes/users.js')


mongoose.set("strictQuery", false);
mongoose
    .connect('mongodb+srv://kajalchik:wwwwww@eatme.x9z4oxx.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("DB ok"))
    .catch((err) => console.log("DB error", err));

const app = express()

const corsOptions = {
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/users', usersRouter);

// app.post('/register', registerValidator, async (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json(errors.array());
//     }
//
//     const password = req.body.password;
//     const salt = await bcrypt.genSalt(6);
//     const passwordHash = await bcrypt.hash(password, salt);
//
//     const doc = new UserModel({
//         fullName: req.body.fullName,
//         email: req.body.email,
//         passwordHash,
//     });
//
//     const user = await doc.save();
//
//     res.json(user)
// })

app.listen(5000, () => {console.log("Server started on port 5000") })

// app.get("/register", (req, res) => {
//     req.body.json({"user5": ["name1", "email1", "pass1"]})
//     .then(console.log(user5))
// })