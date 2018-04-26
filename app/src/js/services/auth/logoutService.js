'use strict'

angular.module('app').service('logoutService',['api',function (api) {

    this.logout = function () {
        api.doLogout();
    }
}]);