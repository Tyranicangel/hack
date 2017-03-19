var express = require('express');
var router = express.Router();
var AssetList = require('../models/assetlist');

router.get('/', function(req, res, next) {
	AssetList.find({}).sort("name").exec(function(err,data){
		return res.json(data);
	});
});

router.put('/',function(req,res,next){
	var name=req.body.name;
	var Al=new AssetList({
		name:name
	});
	Al.save(function(err,result){
		AssetList.find({}).sort("name").exec(function(err,data){
			return res.json(data);
		});
	});
});

module.exports = router;