'use strict';

angular.module('app').controller('loginCtrl', ['$scope', '$location', 'loginService',
    function ($scope, $location, loginService) {
        console.log("Entrei!");
        $scope.usuario = {};

        $scope.submiteLoginForm = function () {
            console.log("loginCtrl");

            console.log($scope.usuario);
            loginService.login($scope.usuario).then(function (data) {
                console.log("Logado!");
                console.log("Token : " + data.data.token);

                console.log("lista");
                // console.log(lista);

                sessionStorage.setItem(data.data.username, data.data.token);
                sessionStorage.username = data.data.username;
                sessionStorage.role = data.data.authorities[0].authority;
                console.log("Lista auth");
                console.log(data.data.authorities[0].authority);

                $location.path("/listbook");
            });
        }

    }]);
