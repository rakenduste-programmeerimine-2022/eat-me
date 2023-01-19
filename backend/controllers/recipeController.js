// const Recipe = require('../models/recipe')
const db = require('../models');
const Recipe = db.recipe;


exports.getAllRecipes = async (req, res) => {
    Recipe
        .find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Err ' + err));
};


// const docs = new Recipe({
//     title: 'chicken',
//     picture: 'png',
//     weight: '400',
//     calories: '200',
//     formula: 'chicken',
//     description: 'podrochui'
// });
//
// const recipe = await docs.save();
// res.json(recipe)
