'use strict';

// console.log(lista.data);

angular.module('app').controller('bookCtrl', ['$scope','$stateParams', '$location', 'bookService','sessionService',
    function ($scope,$stateParams, $location, bookService, sessionService) {

        var lista = sessionStorage.role;
        if(!(lista.indexOf("ADMIN") || lista.indexOf("USER"))){
            $location.path("/");
        }
        console.log(lista.indexOf("ADMIN"));
        if(lista.indexOf("ADMIN") != -1){
            $scope.admin = true;
        }
        else{
            $scope.admin = false;
        }

        console.log($scope.admin);

        $scope.book = {};
        $scope.books = {};

        var getBooks = function () {
            console.log("Entrei");
            bookService.getAll().then(function (data) {
                console.log(data.data);
                $scope.books = data.data;
            })};

        var getBookParam = function(){
            console.log("ID : "+$stateParams.bookId);
            var id  = $stateParams.bookId;
            if(id){
                console.log("Diferente 0");
                bookService.getBookId(id).then(function (data) {
                    console.log(data.data);
                    $scope.book = data.data;
                });
            }
        }

        $scope.submitSalvarForm = function () {
            console.log("bookCtrl");

            console.log($scope.book);
            bookService.salvar($scope.book).then(function (data) {
                console.log("Logado!");
            });
        }

        $scope.submitAtualizarForm = function () {
            bookService.atualizar($scope.book).then(function (data) {
                console.log(data);
                $scope.book = data.data;
            })
        }
        
        $scope.deleteBook = function (obj) {
            bookService.delete(obj).then(function () {
                getBooks();
            })
        }
            getBooks();
            getBookParam();

    }]);