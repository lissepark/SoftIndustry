angular.module('cities').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/cities', {
			templateUrl: 'cities/views/listcity.client.view.html',
			leftNav: 'country/views/listcountry.client.view.html'
		}).when('/cities/create', {
			templateUrl: 'cities/views/createcity.client.view.html',
			leftNav: 'country/views/listcountry.client.view.html'
		}).when('/cities/:cityId', {
			templateUrl: 'cities/views/viewcity.client.view.html',
			leftNav: 'country/views/listcountry.client.view.html'
		}).when('/cities/:cityId/edit', {
			templateUrl: 'cities/views/editcity.client.view.html',
			leftNav: 'country/views/listcountry.client.view.html'
		});
	}
]);