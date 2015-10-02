controllersProviders.controller('BackgroundController', function(valuesFactory, $scope){
	var _self = this;
	this.bg = valuesFactory.bg;
	$scope.update = function(){
		valuesFactory.bg = _self.bg;
	}
	$scope.$watch($scope.update);
});