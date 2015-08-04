/**
 * Created by mbury on 03.08.2015.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productSchema = new Schema({
	id: String,
	name: String,
	description: String,
	cost: Number
});

module.exports = mongoose.model('product', productSchema);