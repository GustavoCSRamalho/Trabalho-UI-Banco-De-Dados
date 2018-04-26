'use strict';

/* Services */

angular.module('app').factory('ChatSocket', ['$rootScope', function($rootScope) {
        var stompClient;

        var wrappedSocket = {

            init: function(url) {
                var socket = new WebSocket('ws://localhost:8080/chat/websocket');
                stompClient = Stomp.over(socket);
                stompClient.debug = null;
                stompClient.heartbeat.outgoing = 1000;
            },
            connect: function(successCallback, errorCallback) {
                stompClient.connect({}, function(frame) {
                    $rootScope.$apply(function() {
                        successCallback(frame);
                    });
                }, function(error) {
                    $rootScope.$apply(function(){
                        errorCallback(error);
                    });
                });
            },
            subscribe : function(destination, callback) {
                stompClient.subscribe(destination, function(message) {
                    $rootScope.$apply(function(){
                        callback(message);
                    });
                });
            },
            send: function(destination, headers, object) {
                stompClient.send(destination, headers, object);
            },
            disconnect: function () {
                stompClient.disconnect(function (frame) {
                    console.log('disconnected');
                });
            }
        }

        return wrappedSocket;

    }]);