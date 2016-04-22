var mongoose = require('mongoose');

var FittyFiverSchema = new mongoose.Schema({
	name: String
});

mongoose.model('FittyFiver', FittyFiverSchema);