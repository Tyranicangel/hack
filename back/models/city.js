var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var city=new Schema({
	name:String,
	latitute:String,
	longitude:String,
	created_at:Date,
	updated_at:Date
});

city.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('City',city);