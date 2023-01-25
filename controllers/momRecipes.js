const express = require('express') 
const router = express.Router() 
const Recipe = require('../models/recipe')
//const multer = require('multer')

router.get('/', (req, res) => { 
    Recipe.find((err, recipes) => { 
        if (err) { 
            console.log(err); 
        } 
        else { 
            res.render('mom/index', { 
                title: 'Mom\'s Recipes', 
                recipes: recipes 
            }) 
        } 
    }) 
})

module.exports = router