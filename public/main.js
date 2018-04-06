angular.module('app',['ngRoute', 'ngResource'])
    .config(function($routeProvider) {

        $routeProvider.when('/1', {
            templateUrl: 'partials/oi.html',
            controller: 'BookController'
        });

        $routeProvider.when('/adicionar', {
            templateUrl: 'partials/adicionar.html',
            controller: 'BookController'
        });

        $routeProvider.when('/oi',{
            templateUrl: 'partials/foi.html',
            controller: 'BookController'
        });

        $routeProvider.when('/',{
            templateUrl: 'partials/listagem.html',
            controller: 'BookController'
        });

        $routeProvider.when('/book/:bookId',{
            templateUrl: 'partials/book.html',
            controller: 'BookController'
        });

        $routeProvider.when('/atualizar/:bookId',{
            templateUrl: 'partials/atualizar.html',
            controller: 'BookController'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    });
