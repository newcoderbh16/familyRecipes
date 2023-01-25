var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family Recipes' });
});

router.get('/', function(req, res, next) {
  res.render('mom/index', { title: 'Mom\'s Recipes' });
});



module.exports = router;
