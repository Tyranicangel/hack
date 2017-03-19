var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var asset=new Schema({
	name:String,
	price:Number,
	type:{type:Schema.ObjectId,ref:'AssetList'},
	latitude:String,
	longitude:String,
	photo:String,
	created_at:Date,
	updated_at:Date
});

asset.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('Asset',asset);