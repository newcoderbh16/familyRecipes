const mongoose = require('mongoose')


// This defines all the attributes that are required to create a Funko Pop Schema Object for mongoose.
// All fields must be filled out correctly in order for an Object to be created.
var recipeSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true,
    },
    story: {

        type: String,
        required: 'Story is required'
    },
    recipeTitle: {

        type: String,
        required: 'Recipe Title required'
    },
    prepTime: {

        type: String,
        required: 'Preparation Time is Required'
    },
    cookTime: {

        type: String,
        required: 'Cook Time is required'
    },
    totalTime: {

        type: String,
        required: 'Total Time is Required'
    },
    ingredients: {

        type: String,
        required: 'Ingredients are required'
    },
    directions: {

        type: String,
        required: 'Directions are required'

    }

})

module.exports = mongoose.model('Recipe', recipeSchema)