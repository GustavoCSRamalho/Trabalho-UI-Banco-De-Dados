'use strict';

angular.module('app').service('loginService', ['api', function (api) {

    this.login = function (Objeto) {
        console.log("Peguei : ");
        console.log(Objeto)
        return api.doLogin(Objeto).then(function (data) {
            console.log(data);
            if(data.status == 200){
                sessionStorage.setItem(data.data.username, data.data.token);
                sessionStorage.username = data.data.username;

            }
            console.log("Aqui");
            console.log(data);
            return data;
        })
    }
}]);
