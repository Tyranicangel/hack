var express = require('express');
var router = express.Router();
var City = require('../models/city');

router.get('/all', function(req, res, next) {
	City.find({}).sort("name").exec(function(err,dat){
		return res.json(dat);
	});
});

router.get('/', function(req, res, next) {
	City.findById(req.body.city,function(err,data){
		return res.json(data);
	});
});

router.put('/',function(req,res,next){
	var data=req.body;
	var Nc=new City({
		name:data.name,
		latitude:data.latitude,
		longitude:data.longitude
	});
	Nc.save(function(err,result){
		City.find({}).sort("name").exec(function(err,dat){
			return res.json(dat);
		});
	});
});

module.exports = router;