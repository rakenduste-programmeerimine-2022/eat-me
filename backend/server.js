//
// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// // const usersRouter = require('./routes/user.routes.js')
// const authUsersRouter = require('./routes/auth.routes')
// const recipeRouter = require('./routes/recipe.routes')
// const Recipe = require('./models/recipe')
//
// mongoose.set("strictQuery", false);
// mongoose
//     .connect('mongodb+srv://kajalchik:wwwwww@eatme.x9z4oxx.mongodb.net/?retryWrites=true&w=majority')
//     .then(() => console.log("DB ok"))
//     .catch((err) => console.log("DB error", err));
//
// const app = express()
//
// const corsOptions = {
//     origin:'*',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
// }
//
// app.use(cors(corsOptions))
// app.use(express.json())
//
// app.use('/users', authUsersRouter);
// // app.use('/recipe', recipeRouter)
// // app.use('/users', usersRouter);
// //
// // app.post('/register', registerValidator, async (req, res) => {
// //     const errors = validationResult(req);
// //     if(!errors.isEmpty()){
// //         return res.status(400).json(errors.array());
// //     }
// //
// //     const password = req.body.password;
// //     const salt = await bcrypt.genSalt(6);
// //     const passwordHash = await bcrypt.hash(password, salt);
// //
// //     const doc = new UserModel({
// //         fullName: req.body.fullName,
// //         email: req.body.email,
// //         passwordHash,
// //     });
// //
// //     const user = await doc.save();
// //
// //     res.json(user)
// // })
//
// // async function run(){
// //     try{
// //         const recipeCollection = mongoose.createCollection('receptiki')
// //         const recept = new Recipe({
// //             title: 'Mjaso',
// //             formula: 'vkusnaja'
// //         })
// //         const result = await recipeCollection.insertOne(recept)
// //         console.log(result)
// //         console.log(recept)
// //
// //     } catch(e) {
// //         console.log(e)
// //     }
// // }
// // run().catch(console.error)
//
//
// app.post('/', async(req, res) => {
//     try{
//         const recipes = await Recipe.create([
//             {title: 'pizza'},
//             {title: 'burger'},
//             {title: 'omlet'},
//             {title: 'pashtet'},
//             {title: 'makaronq'},
//             {title: 'Andres'}
//         ])
//         res.status(201).send()
//     }
//     catch(e){
//         res.status(500).send(e)
//     }
// })
//
// app.get('/recipe', async (req, res) => {
//
//     const recipes = await Recipe.find()
//
//
//
//     try {
//         const skip =
//             req.query.skip && /^\d+$/.test(req.query.skip) ? Number(req.query.skip) : 0
//
//         const recipes = await Recipe.find({}, undefined, { skip, limit: 5 }).sort('title')
//
//         res.send(recipes)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
//
// app.listen(5000, () => {console.log("Server started on port 5000") })
//
// // app.get("/register", (req, res) => {
// //     req.body.json({"user5": ["name1", "email1", "pass1"]})
// //     .then(console.log(user5))
// // })
//
// app.post('/recipe', async (req, res) => {
//     const docs = new Recipe({
//         title: 'KFC hot chicken',
//         picture: 'pngkfdsbodf',
//         weight: '400',
//         calories: '200',
//         formula: 'flour, salt',
//         description: 'podrochui'
//     });
//     const recipe = await docs.save();
//     res.json(recipe)
// })
//
//
// app.get('/recipe', async (req, res) => {
//     const recipes = await Recipe.find({}).sort('title')
//     res.send(recipes)
// })
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const usersRouter = require('./routes/user.routes.js')
const authUsersRouter = require('./routes/auth.routes')
const recipeRouter = require('./routes/recipe.routes')
const Recipe = require('./models/recipe')

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

app.use('/users', authUsersRouter);
// app.use('/recipe', recipeRouter)
// app.use('/users', usersRouter);
//
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

// async function run(){
//     try{
//         const recipeCollection = mongoose.createCollection('receptiki')
//         const recept = new Recipe({
//             title: 'Mjaso',
//             formula: 'vkusnaja'
//         })
//         const result = await recipeCollection.insertOne(recept)
//         console.log(result)
//         console.log(recept)
//
//     } catch(e) {
//         console.log(e)
//     }
// }
// run().catch(console.error)
//
//
// app.post('/', async(req, res) => {
//     try{
//         const recipes = await Recipe.create([
//             {title: 'pizza'},
//             {title: 'burger'},
//             {title: 'omlet'},
//             {title: 'pashtet'},
//             {title: 'makaronq'},
//             {title: 'Andres'}
//         ])
//         res.status(201).send()
//     }
//     catch(e){
//         res.status(500).send(e)
//     }
// })
//
// app.get('/recipe', async (req, res) => {
//
//     const recipes = await Recipe.find()
//
//
//
//     try {
//         const skip =
//             req.query.skip && /^\d+$/.test(req.query.skip) ? Number(req.query.skip) : 0
//
//         const recipes = await Recipe.find({}, undefined, { skip, limit: 5 }).sort('title')
//
//         res.send(recipes)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

app.listen(5000, () => {console.log("Server started on port 5000") })

// app.get("/register", (req, res) => {
//     req.body.json({"user5": ["name1", "email1", "pass1"]})
//     .then(console.log(user5))
// })

app.post('/recipe', async (req, res) => {
    const docs = new Recipe({
        title: req.body.title,
        picture: req.body.picture,
        weight: req.body.weight,
        calories: req.body.calories,
        formula: req.body.formula,
        description: req.body.description
    });
    const qqq = await docs.save();
    res.json(qqq)
})


app.get('/recipe', async (req, res) => {
    const recipes = await Recipe.find({}).sort('title')
    res.send(recipes)
})