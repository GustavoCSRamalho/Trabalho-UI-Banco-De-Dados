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
                    // ,
                    // controller: "logoutController"
                })
                //
                // .state('login', {
                //     url: "/",
                //     templateUrl: "views/pages/auth/login.html",
                //     controller: "loginCtrl"
                // })
                // .state('register',{
                //     url: "/register",
                //     templateUrl: "views/pages/auth/register.html",
                //     controller: "registerCtrl"
                // })
                // .state('home.addbook',{
                //     url: "/addbook",
                //     templateUrl: "views/pages/dog/addBook.html",
                //     controller: "bookCtrl"
                // })
                // .state('home.addanimal',{
                //     url: "/addanimal",
                //     templateUrl: "views/pages/dog/addBook.html",
                //     controller: "informationCtrl"
                // })
                // .state('home.listbook',{
                //     url: "/listbook",
                //     templateUrl: "views/pages/dog/listBook.html",
                //     controller: "bookCtrl"
                // })
                .state('home.listdogs',{
                    url: "/home",
                    templateUrl : "views/pages/information/conteudo.html"
                    // templateUrl: "views/pages/dog/listBook.html"
                    ,
                    controller: "informationCtrl"
                })
                .state('home.cadastrodogs', {
                    url: '/cadastroanimal',
                    templateUrl : "views/pages/information/cadastro.html",
                    controller: "cadastroAnimalCtrl"
                })
                // .state('home.bookid',{
                //     url: '/bookid/:bookId',
                //     templateUrl: "views/pages/dog/bookId.html",
                //     controller : "bookCtrl"
                // })
                .state('home.animalid',{
                    url: '/animal/:animalId',
                    templateUrl: "views/pages/information/animalId.html",
                    controller : "informationCtrl"
                })
                // .state('home.editbook',{
                //     url: '/editbook/:bookId',
                //     templateUrl: 'views/pages/dog/editBook.html',
                //     controller: "bookCtrl"
                // })
                // .state('home.chat',{
                //     url: '/chat',
                //     templateUrl: 'views/pages/chat/chat.html',
                //     controller: 'chatController'
                // })
            ;
        }]);
}());