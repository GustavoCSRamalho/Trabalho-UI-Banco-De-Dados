'use strict';

angular.module('app').controller('logoutController',['logoutService','$location','$scope',
    function (logoutService, $location, $scope) {

    $scope.sair = function(){
        logoutService.logout();
        sessionStorage.clear();
        window.location = "/";
    };

}])