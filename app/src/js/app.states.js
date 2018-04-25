(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    abstract: true,
                    url: "",
                    templateUrl: "views/home.html"
                })
                .state('login', {
                    url: "/",
                    templateUrl: "views/pages/auth/login.html",
                    controller: "loginCtrl"
                })
                .state('register',{
                    url: "/register",
                    templateUrl: "views/pages/auth/register.html",
                    controller: "registerCtrl"
                })
                .state('home.addbook',{
                    url: "/addbook",
                    templateUrl: "views/pages/book/addBook.html",
                    controller: "bookCtrl"
                })
                .state('home.listbook',{
                    url: "/listbook",
                    templateUrl: "views/pages/book/listBook.html",
                    controller: "bookCtrl"
                })
                .state('home.bookid',{
                    url: '/bookid/:bookId',
                    templateUrl: "views/pages/book/bookId.html",
                    controller : "bookCtrl"
                })
                .state('home.editbook',{
                    url: '/editbook/:bookId',
                    templateUrl: 'views/pages/book/editBook.html',
                    controller: "bookCtrl"
                });
        }]);
}());