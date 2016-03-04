angular.module('country').factory('Countries', ['$resource',
	function($resource) {
		return $resource('api/countries/:countryId', {
			countryId: '@_id'
		}, {
		update: {
			method: 'PUT'
		}
	});
}]);