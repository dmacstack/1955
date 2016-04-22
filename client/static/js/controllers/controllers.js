myFFApp.controller('FittyFiversController', function($scope, FittyFiverFactory){
	
	FittyFiverFactory.index(function(data){
		
		$scope.fittyfivers = data;
		console.log('index in controller', $scope.fittyfivers);
	});//end of index

	$scope.addFittyFiver = function(){
		FittyFiverFactory.create($scope.newfittyfiver, function(){
			$scope.fittyfivers = FittyFiverFactory.index();
		});//end of create
		$scope.newfittyfiver = {};
	}//end of addFittyFiver

	$scope.removeFittyFiver = function(fittyfiver){
		console.log('in remove controller');
		FittyFiverFactory.destroy(fittyfiver, function(){
			$scope.newfittyfiver = {};
		});
	}

});//end of controller