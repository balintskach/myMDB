var express = require('express');
var router = express.Router();




router.get('/signup', function(req, res, next) {
    
    res.render('./user/signup', { title: 'Express' });
});

router.get('/signin', function(req, res, next) {
    
    res.render('./user/signin', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
