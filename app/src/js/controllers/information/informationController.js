'use strict';

// console.log(lista.data);

angular.module('app').controller('informationCtrl', ['$scope', '$stateParams', '$location', 'informationService', 'sessionService',
    function ($scope, $stateParams, $location, informationService, sessionService) {

        $scope.submitted = false;
        $scope.status = null;

        // var lista = sessionStorage.role;
        // if (!(lista.indexOf("ADMIN") || lista.indexOf("USER"))) {
        //     $location.path("/");
        // }
        // if (lista.indexOf("ADMIN") != -1) {
        //     $scope.admin = true;
        // }
        // else {
        //     $scope.admin = false;
        // }

        $scope.dog = {};
        $scope.dogs = {};

        var getDogs = function () {
            console.log("Entrei Dogs");
            informationService.getAll().then(function (data) {
                console.log(data.data);
                $scope.dogs = data.data;
            })
        };

        var getDogID = function () {
            console.log("ID : " + $stateParams.bookId);
            // var id  = $stateParams.bookId;
            var id = $stateParams.animalId;
            if (id) {
                console.log("Diferente 0");
                informationService.getDogId(id).then(function (data) {
                    if (data.status != 200) {
                        $scope.mensagem = {texto: 'Erro ao consultar este livro!'};
                    } else {
                        console.log(data.data);
                        $scope.dog = data.data;
                    }

                });
            }
        }

        $scope.submitSalvarForm = function (isValid) {
            $scope.submitted = true;
            if (isValid) {
                console.log("bookCtrl");

                console.log($scope.information);
                informationService.salvar($scope.information).then(function (data) {
                    if (data.status === 201) {
                        $scope.status = 201;
                        $scope.mensagem = {texto: 'Criado com sucesso!'};
                    } else {
                        $scope.messagem = {texto: 'Erro na criação!'};
                    }
                });
            }

        }
        //
        // $scope.submitAtualizarForm = function () {
        //     informationService.atualizar($scope.dog).then(function (data) {
        //         if(data.status == 200){
        //             $scope.mensagem = {texto : 'Atualizado com sucesso!'}
        //             $scope.status = 200;
        //         }else{
        //             $scope.mensagem = {texto : 'Error ao atualizar!'}
        //         }
        //         $scope.dog = data.data;
        //     })
        // }

        // $scope.deleteBook = function (obj) {
        //     informationService.delete(obj).then(function (data) {
        //         if (data.status == 417) {
        //             $scope.status = 417;
        //             $scope.mensagem = {texto: 'Não foi possivel deletar!'}
        //         }
        //         getDogs();
        //     })
        // }
        getDogs();
        getDogID();

    }]);