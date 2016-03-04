angular.module('country').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/countries', {
			templateUrl: 'country/views/listcountry.client.view.html',
			leftNav: 'country/views/listcountry.client.view.html'
		}).when('/countries/create', {
			templateUrl: 'country/views/createcountry.client.view.html',
			leftNav: 'country/views/listcountry.client.view.html'
		}).when('/countries/:countryId', {
			templateUrl: 'country/views/viewcountry.client.view.html',
			controller: 'CountriesController',
			leftNav: 'country/views/listcountry.client.view.html'
		}).when('/countries/:countryId/edit', {
			templateUrl: 'country/views/editcountry.client.view.html',
			leftNav: 'country/views/listcountry.client.view.html'
		});
	}
]);
