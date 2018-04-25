'use strict';
angular.module('app').controller('registerCtrl', ['$scope', '$location', 'registerService',
    function ($scope, $location, registerService) {
        console.log("Entrei register!");
        $scope.cadastro = {};

        $scope.submitRegisterForm = function () {
            console.log("registerCtrl");

            console.log($scope.cadastro);
            registerService.login($scope.cadastro).then(function (data) {
                console.log("registrado!");
                console.log(data);
            });
        }

    }]);
