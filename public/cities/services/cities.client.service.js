angular.module('cities').factory('Cities', ['$resource',
	function($resource) {
		return $resource('api/cities/:cityId', {
			cityId: '@_id'
		}, {
		update: {
			method: 'PUT'
		}
	});
}]);