'use strict';

// console.log(lista.data);

angular.module('app').controller('cadastroAnimalCtrl', ['$scope', '$stateParams', '$location', 'informationService',
    'sessionService', 'Upload',
    function ($scope, $stateParams, $location, informationService, sessionService, Upload) {

        // $scope.animal = {
        //     name: "",
        //     description:"",
        //     local:"",
        //     race:"",
        //     gender :"",
        //     bear:"",
        //     file : []
        // };
        $scope.animal = {};
        $scope.file;

        $scope.submitSalvarForm = function () {
            $scope.submitted = true;
            // if (isValid) {
            //     console.log("bookCtrl");

            // console.log($scope.file[0]);
            // console.log(document.getElementById("files"));
            // console.log($scope.files);
            // var data = new FormData();
            // data.append("id",$scope.animal.id);
            // data.append("name",$scope.animal.name);
            // data.append("description",$scope.animal.description);
            // data.append("local",$scope.animal.local);
            // data.append("race",$scope.animal.race);
            // data.append("gender",$scope.animal.gender);
            // data.append("bear",$scope.animal.bear);
            //
            // data.append('file',document.getElementById("files").files[0]);
            // data.append('file',$scope.animal.file);
            // data.append('name',$scope.animal.name);
            // data.append('description',$scope.animal.description);
            // data.append('local',$scope.animal.local);
            // data.append('race',$scope.animal.race);
            // data.append('gender',$scope.animal.gender);
            // data.append('bear',$scope.animal.bear);
            console.log("File : ");
            // console.log(data);
            $scope.animal.file = document.getElementById("files").files[0];
            console.log($scope.animal)
            var data = new FormData();
            data.append('file', $scope.animal.file);
            informationService.upload(data).then(function (data) {
                if (data.status === 201) {
                    $scope.status = 201;
                    $scope.mensagem = {texto: 'Criado com sucesso!'};
                } else {
                    $scope.messagem = {texto: 'Erro na criação!'};
                }
            });
            informationService.salvar($scope.animal).then(function (data) {
                if (data.status === 201) {
                    $scope.status = 201;
                    $scope.mensagem = {texto: 'Criado com sucesso!'};
                } else {
                    $scope.messagem = {texto: 'Erro na criação!'};
                }
            });


        }

    }]);