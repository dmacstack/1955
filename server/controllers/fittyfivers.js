var mongoose = require('mongoose');

var FittyFiver = mongoose.model('FittyFiver');

module.exports = (function(){
	return {
		index: function(req, res){
			FittyFiver.find({}, function(err, results){
				if(err){console.log(err);}
				else{res.json(results);}
			});
		},
		create: function(req, res){
			FittyFiver.create(req.body, function(err, results){
				if(err){console.log({error:err})}
				else{res.json(results);}
			});
		},
		delete: function(req, res){
			console.log(req.params.id);
			FittyFiver.remove({_id: req.params.id}, function(err, results){
				if(err){console.log({error:err})}
				else{res.json(results);}
			});
		}
	}
})();