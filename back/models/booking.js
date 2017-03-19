var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var booking=new Schema({
	asset:{type:Schema.ObjectId,ref:'Asset'},
	from:Date,
	to:Date,
	created_at:Date,
	updated_at:Date
});

booking.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('Booking',booking);