'use strict';

angular.module('app').service('registerService', ['api', function (api) {

    this.login = function (Objeto) {
        return api.doRegister(Objeto).then(function (data) {
            console.log("doRegister");
            console.log(data);
            return data;
        }).catch(function (err) {
            console.log("Err");
            return err;
        })
    }
}]);