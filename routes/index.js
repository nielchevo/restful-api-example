var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/adduser', function(req,res, next) {
  res.render('adduser', {title: 'Add New User'});
});

module.exports = router;
