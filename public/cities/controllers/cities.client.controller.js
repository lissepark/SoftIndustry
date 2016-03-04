angular.module('cities').controller('CitiesController', ['$scope',
'$routeParams', '$location', 'Cities',function($scope, $routeParams, $location, Cities) {

$scope.create = function() {
	var city = new Cities({
		title: this.title,
		desc: this.desc,
		country: this.country
	});
	city.$save(function(response) {
		$location.path('cities/' + response._id);
		//$location.path('country/cities/' + response._id);
	}, function(errorResponse) {
		//$scope.error = errorResponse.data.message;
	});
};

$scope.find = function() {
	$scope.cities = Cities.query();
};

$scope.findOne = function() {
	$scope.city = Cities.get({
		cityId: $routeParams.cityId
	});
};

$scope.update = function() {
	$scope.city.$update(function() {
		$location.path('cities/' + $scope.city._id);
	}, function(errorResponse) {
		//$scope.error = errorResponse.data.message;
	});
};

$scope.delete = function(city) {
	if (city) {
		city.$remove(function() {
			for (var i in $scope.cities) {
				if ($scope.cities[i] === city) {
					$scope.cities.splice(i, 1);
				}
			}
		});
	} else {
		$scope.city.$remove(function() {
			$location.path('/');
		});
	}
};

}]);
