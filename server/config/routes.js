var fittyfivers = require('./../controllers/fittyfivers.js');

module.exports = function(app){

	app.get('/fittyfivers', function(req, res){
		fittyfivers.index(req, res);
	});

	app.post('/fittyfivers', function(req, res){
		fittyfivers.create(req, res);
	});

	app.delete('/fittyfivers/:id', function(req, res){

		fittyfivers.delete(req, res);
	})

}