var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('demo');
});

router.get('/demo1',function(req,res,next){
	res.render('demo1');
})

module.exports = router;

