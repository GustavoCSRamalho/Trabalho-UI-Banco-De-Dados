angular.module('app',['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/oi.html',
            controller: 'BookController'
        });

        $routeProvider.when('/oi',{
            templateUrl: 'partials/foi.html',
            controller: 'BookController'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    });
