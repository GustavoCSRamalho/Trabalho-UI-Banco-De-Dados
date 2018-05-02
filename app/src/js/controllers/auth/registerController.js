'use strict';
angular.module('app').controller('registerCtrl', ['$scope', '$location', 'registerService',
    function ($scope, $location, registerService) {
        console.log("Entrei register!");
        $scope.cadastro = {};
        $scope.status;
        $scope.submitRegisterForm = function () {
            console.log("registerCtrl");

            console.log($scope.cadastro);
            registerService.login($scope.cadastro).then(function (data) {
                $scope.status = data.status;
                console.log("registrado!");
                console.log(data);
            }).catch(function (err) {
                $scope.mensagem = {texto : 'Não foi possível fazer o registro!'}
            });
        }

    }]);
