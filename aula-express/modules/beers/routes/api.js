var express = require('express');
var router = express.Router();

var Controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Listagem de cervejas' });
});

router.post('/', function(req, res, next){
	Controller.create(req, res);
})

module.exports = router;
