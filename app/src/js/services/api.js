'use strict';

angular.module('app').service('api', ['$http', function ($http) {

    this.doLogin = function (obj) {
        console.log("API");
        console.log(obj);
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/api/auth',
            data: obj,
            headers: {}
        });
    }

    this.doRegister = function (obj) {
        console.log("doRegister");
        console.log(obj);
        return $http({
            method: "POST",
            url: 'http://localhost:8080/api/register',
            data: obj
        });
    }

    this.doSave = function (obj) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/api/books',
            headers: {
                'Content-type': 'application/json;charset=utf-8',
                'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            },
            data : obj

        });
    }
    
    this.doAtualizar = function (obj) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/books',
            data: obj,
            headers: {
                'Content-type': 'application/json;charset=utf-8',
                'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            }
        });
    }
    
    this.doDelete = function (obj) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/books',
            params: {
                id: obj.id
            },
            headers: {
                'Content-type': 'application/json;charset=utf-8',
                'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            }
        })
    }
    
    this.doGetAll = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/books',
            headers: {
                'Content-type': 'application/json;charset=utf-8',
                'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            }
        });
    }
    
    this.doGetBookId = function (id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/books/'+ id,
            headers: {
                'Content-type': 'application/json;charset=utf-8',
                'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            }
        })
    }

}]);
