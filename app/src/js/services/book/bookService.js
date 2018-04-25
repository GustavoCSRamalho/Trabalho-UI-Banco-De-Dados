'use strict';

angular.module('app').service('bookService', ['api', function (api) {

    this.salvar = function (obj) {
        return api.doSave(obj).then(function (data) {
            console.log("doRegister");
            console.log(data);
            return data;
        }).catch(function (err) {
            console.log("Err");
            return err;
        })
    };

    this.atualizar = function (obj) {
        return api.doAtualizar(obj).then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        });
    };

    this.delete = function (obj) {
        return api.doDelete(obj).then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    };


    this.getAll = function () {
        return api.doGetAll().then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }

    this.getBookId = function (id) {
        return api.doGetBookId(id).then(function (data) {
            return data;
        }).catch(function (err) {
            return err;
        })
    }
}]);