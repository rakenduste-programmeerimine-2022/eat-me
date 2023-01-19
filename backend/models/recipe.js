const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    formula: {
        type: String,
        required: true
    }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe

//
// picture: {
//     type: String,
//         required: true
// },
// weight: {
//     type: String,
//         required: true
// },
// calories: {
//     type: String,
//         required: true
// },
// formula: {
//     type: String,
//         required: true
// },
// description: {
//     type: String,
//         required: true
// }