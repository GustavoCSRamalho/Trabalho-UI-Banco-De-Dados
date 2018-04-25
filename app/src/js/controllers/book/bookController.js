'use strict';
var lista = sessionStorage.role;

angular.module('app').controller('bookCtrl', ['$scope','$stateParams', '$location', 'bookService',
    function ($scope,$stateParams, $location, bookService) {
        if(!(lista.indexOf("ADMIN") || lista.indexOf("COMUM"))){
            window.location = "/#/";
        }
        if(lista.indexOf("ADMIN")){
            $scope.admin = true;
        }

        console.log("ADMIN : "+$scope.admin);




        console.log("Entrei!");
        $scope.book = {};
        $scope.books = {};



        var getBooks = function () {
            bookService.getAll().then(function (data) {
                $scope.books = data.data;
            });
        }

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

        getBooks();
        getBookParam();

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

    }]);