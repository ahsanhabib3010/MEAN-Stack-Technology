




var express = require('express');
var router = express.Router();


Home = require('../schema/home.js');
//Booter = require('../schema/booter.js');

router.get('/', function(req, res){

	 // Home.find(function(err, response){
         //res.send(response);
		console.log("Home Router");
   // });

	//res.send('');
	//console.log("");
});

router.get('/about', function(req, res,next){
	res.send('About Router is working');
	next();
	
});

router.post('/', function(req, res){
	res.send('Router is working');
});
//export this router to use in our index.js
module.exports = router;
