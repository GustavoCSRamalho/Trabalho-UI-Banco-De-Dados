angular.module('app',['ngRoute', 'ngResource','app.controllers','app.services'])
    .config(function($routeProvider) {

        $routeProvider.when('/1', {
            templateUrl: 'partials/oi.html',
            controller: 'BookController'
        });

        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'BookController'
        });

        $routeProvider.when('/register', {
            templateUrl: 'partials/register.html',
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

        // $routeProvider.when('/chat',{
        //     templateUrl: 'partials/chat.html',
        //     controller: 'ChatCtrl'
        // });
        //
        $routeProvider.when('/chat',{
            templateUrl: 'partials/chat.html',
            controller: 'ChatController'
        });


        // $routeProvider.when('/chat2',{
        //     templateUrl: 'partials/chat2.html',
        //     controller: 'ChatCtrl'
        // });


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

angular.module('app.controllers',[]);
angular.module('app.services',[]);
