'use strict';

// console.log(lista.data);

angular.module('app').controller('bookCtrl', ['$scope','$stateParams', '$location', 'bookService','sessionService',
    function ($scope,$stateParams, $location, bookService, sessionService) {

    $scope.submitted = false;
    $scope.status = null;

        var lista = sessionStorage.role;
        if(!(lista.indexOf("ADMIN") || lista.indexOf("USER"))){
            $location.path("/");
        }
        if(lista.indexOf("ADMIN") != -1){
            $scope.admin = true;
        }
        else{
            $scope.admin = false;
        }

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
                    if(data.status != 200){
                        $scope.mensagem = {texto : 'Erro ao consultar este livro!'};
                    }else{
                        console.log(data.data);
                        $scope.book = data.data;
                    }

                });
            }
        }

        $scope.submitSalvarForm = function (isValid) {
            $scope.submitted = true;
            if(isValid){
                console.log("bookCtrl");

                console.log($scope.book);
                bookService.salvar($scope.book).then(function (data) {
                    if(data.status === 201){
                        $scope.status = 201;
                        $scope.mensagem = {texto : 'Criado com sucesso!'};
                    }else{
                        $scope.messagem = {texto : 'Erro na criação!'};
                    }
                });
            }

        }

        $scope.submitAtualizarForm = function () {
            bookService.atualizar($scope.book).then(function (data) {
                if(data.status == 200){
                    $scope.mensagem = {texto : 'Atualizado com sucesso!'}
                    $scope.status = 200;
                }else{
                    $scope.mensagem = {texto : 'Error ao atualizar!'}
                }
                $scope.book = data.data;
            })
        }
        
        $scope.deleteBook = function (obj) {
            bookService.delete(obj).then(function (data) {
                if(data.status == 417){
                    $scope.status = 417;
                    $scope.mensagem = {texto: 'Não foi possivel deletar!'}
                }
                getBooks();
            })
        }
            getBooks();
            getBookParam();

    }]);