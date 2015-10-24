var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  Controller.list(req, res);
 // res.render('index', { title: 'Listagem de cervejas' });
});

router.get('/:id', function(req, res, next) {
  Controller.busca(req, res);
 // res.render('index', { title: 'Listagem de cervejas' });
});

module.exports = router;
