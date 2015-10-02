controllersProviders.controller('AbacusController', function(valuesFactory, $scope){
	var _self = this;
	$scope.updateBackground = function(){
		_self.background = "back"+valuesFactory.bg;
	}
	$scope.$watch($scope.updateBackground);
});