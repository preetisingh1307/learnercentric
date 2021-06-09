var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Learner Centric' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Learner Centric' });
});

module.exports = router;
