var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var assetList=new Schema({
	name:String,
	created_at:Date,
	updated_at:Date
});

assetList.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('AssetList',assetList);