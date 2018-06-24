'use strict';

angular.module('app').service('api', ['$http', function ($http) {

    this.doLogin = function (obj) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/api/auth',
            data: obj
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
        console.log("Dentro do doSave");
        console.log(obj);
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/api/send',
            headers: {
                'Content-type': 'application/json;charset=utf-8'//,
                // 'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            },
            data : obj

        });
    }
    this.doUpload = function (obj) {
        console.log("Dentro do doUpload");
        console.log(obj);
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/api/upload',
            transformRequest : angular.identity,
            headers: {
                'Content-type': undefined//,
                // 'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            },
            data : obj

        });
    }
    
    // this.doAtualizar = function (obj) {
    //     return $http({
    //         method: 'PUT',
    //         url: 'http://localhost:8080/api/dogs',
    //         data: obj,
    //         headers: {
    //             'Content-type': 'application/json;charset=utf-8',
    //             'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
    //         }
    //     });
    // }
    
    // this.doDelete = function (obj) {
    //     return $http({
    //         method: 'DELETE',
    //         url: 'http://localhost:8080/api/dogs',
    //         params: {
    //             id: obj.id
    //         },
    //         headers: {
    //             'Content-type': 'application/json;charset=utf-8',
    //             'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
    //         }
    //     })
    // }
    
    this.doGetAll = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/animals',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
                // ,
                // 'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            }
        });
    }
    
    this.doGetAnimalId = function (id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/animal/'+ id,
            headers: {
                'Content-type': 'application/json;charset=utf-8'
                // ,
                // 'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
            }
        })
    }

    this.doLogout = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/logout',
            headers : {}
        });
    }

}]);
