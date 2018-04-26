'use strict'

angular.module('app').service('sessionService',[function () {


    this.verifySession = function () {
        var sess = -1;
        var lista = sessionStorage.role;
        if(!(lista.indexOf("ADMIN") || lista.indexOf("USER"))){
            // $location.path("/");
            sess = -1;
        }
        if(lista.indexOf("ADMIN")){
            $scope.admin = true;
            sess
        }
    }

}])
