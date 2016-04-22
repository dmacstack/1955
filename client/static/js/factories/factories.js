myFFApp.factory('FittyFiverFactory', function($http){
	var factory = {};
	var fittyfivers = [];

	factory.index = function(callback){
		$http.get('/fittyfivers').success(function(output){
			fittyfivers = output;
			callback(fittyfivers);
		});
	};

	factory.create = function(info, callback){
		$http.post('/fittyfivers', info).success(function(output){
			fittyfivers.push(output);
		});
	};
	factory.destroy = function(fittyfiver, callback){
		$http.delete('/fittyfivers/'+fittyfiver._id).success(function(output){
			fittyfivers.splice(fittyfivers.indexOf(fittyfiver), 1);
		})
	}

	return factory;
});