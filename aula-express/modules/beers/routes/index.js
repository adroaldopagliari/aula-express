var express = require('express');
var router = express.Router();
var CController = require('./../CController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pós WebMob Unoesc' });
});

module.exports = router;
