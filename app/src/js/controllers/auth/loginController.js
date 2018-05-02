'use strict';

angular.module('app').controller('loginCtrl', ['$scope', '$location', 'loginService',
    function ($scope, $location, loginService) {
        console.log("Entrei!");
        $scope.usuario = {};
        $scope.status;
        $scope.submitted = false;

        $scope.submiteLoginForm = function (isValid) {
            $scope.submitted = true;
            if(isValid){
                console.log("loginCtrl");


                loginService.login($scope.usuario).then(function (data) {


                    sessionStorage.setItem(data.data.username, data.data.token);
                    sessionStorage.username = data.data.username;
                    sessionStorage.role = data.data.authorities[0].authority;


                    $location.path("/listbook");

                }).catch(function (err) {
                    $scope.mensagem = {texto : 'Usuario e/ou senha não conferem!'};

                });
            }

        }

    }]);
