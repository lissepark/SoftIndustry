angular.module('country').controller('CountriesController', ['$scope','$routeParams', '$location', 'Countries',function($scope, $routeParams, $location, Countries) {

$scope.createCountry = function() {
	var country = new Countries({
		title: this.title,
		text: this.text
	});
	country.$save(function(response) {
		//$location.path('countries/' + response._id);
	}, function(errorResponse) {
		//$scope.error = errorResponse.data.message;
	});
};

$scope.findCountry = function() {
	$scope.countries = Countries.query();
};

$scope.findOneCountry = function() {
	$scope.country = Countries.get({
		countryId: $routeParams.countryId
	});
};

$scope.updateCountry = function() {
	$scope.country.$update(function() {
		$location.path('countries/' + $scope.country._id);
	}, function(errorResponse) {
		//$scope.error = errorResponse.data.message;
	});
};

$scope.deleteCountry = function(country) {
	if (country) {
		country.$remove(function() {
			for (var i in $scope.countries) {
				if ($scope.countries[i] === country) {
					$scope.countries.splice(i, 1);
				}
			}
		});
	} else {
		$scope.country.$remove(function() {
			$location.path('countries');
		});
	}
};

}]);
