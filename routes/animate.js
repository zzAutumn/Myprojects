const express = require('express');
const router = express.Router();


/*GET the pages*/
router.get('/',function(req,res,next){
	res.render('animate1/basicPage');
})

/*GET the chooseTool pages*/
router.get('/chooseTool',function(req,res,next){
	res.render('animate1/chooseTool');
})

/*GET the software pages*/
router.get('/chooseTool/software',function(req,res,next){
	res.render('animate1/software');
})

/*GET the book pages*/
router.get('/chooseTool/book',function(req,res,next){
	res.render('animate1/book');
})


module.exports = router;








