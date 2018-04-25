'use strict';

angular.module('app').service('loginService', ['api', function (api) {

    this.login = function (Objeto) {
        return api.doLogin(Objeto).then(function (data) {
            // $scope.mensagem = { texto: 'Logado com sucesso!' };
            console.log(data);
            console.log("Token " + data.data.token);
            sessionStorage.setItem(data.data.username, data.data.token);
            sessionStorage.username = data.data.username;
            return data;
        })
    }
}]);
