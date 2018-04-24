angular.module("app").controller("ChatController", function($scope,$timeout) {

    // $stomp.connect('ws://192.168.8.108:8080/chat');
    // var web = webstomp.over('192.168.8.108:8080/chat');

    // var stomp = Stomp.over('ws://192.168.8.108:8080/chat');
    // var connect = function(){
    //     stomp.connect({},function (frame) {
    //                 console.log("FRAME : "+frame);
    //                 stomp.subscribe("/topic/message",function (data) {
    //                     console.log("RECEBI : "+data);
    //                 })
    //         //
    //             var teste = {contents:"Conteudo",fromUserId:"Gu",toUserId:"Deus"};
    //         //
    //             stomp.send("/app/chat",teste);
    //             console.log("OK")
    //     })
    // }
    //
    //
    // connect();


    // var inicio = function () {
    //     var socket = new WebSocket('ws://localhost:8080/chat');
    //     stompClient = Stomp.over(socket);
    //     stompClient.debug = null;
    //     stompClient.heartbeat.outgoing = 1000;
    //     connect();
    //     sub();
    //     sen();
    // }
    //
    // var connect = function(){
    //     stompClient.connect({}, function(frame) {
    //         console.log(frame);
    //     }, function(error) {
    //        console.log(error);
    //     });
    // }
    //
    // var sub = function(){
    //     stompClient.subscribe('/topic/message',function (data) {
    //         console.log("DATA : "+data);
    //     })
    // }
    //
    // var sen = function(){
    //     stompClient.send('/app/chat', {}, JSON.stringify({contents:"contente123",fromUserId:"Gustavo",toUserId:"Deus"}));
    // }
    //
    // inicio();


















    // $scope.privateMessage = [];
    // $scope.publicMessage = [];
    // $scope.participantes = [];
    // $scope.username = sessionStorage.username;
    // $scope.sendTo = 'everyone';
    // var RECONNECT_TIMEOUT = 30000;
    // var stomp;
    // console.log("Cheguei")
    //
    // // var reconnect = function() {
    // //     $timeout(function() {
    // //         initialize();
    // //     }, RECONNECT_TIMEOUT);
    // // };
    //
    // var startListener = function() {
    //     // console.log("2");
    //     stomp.subscribe("/topic/message", function(data) {
    //         this.publicMessage.push(data);
    //         console.log("Publico : "+data);
    //
    //     });
    //     // login123();
    // };
    // //
    // var initialize = function() {
    //     // var client = 'ws://192.168.8.108:8080/chat';
    //
    //     // stomp = Stomp.over(client);
    //     stomp = Stomp.client('ws://192.168.8.108:8080/chat');
    //
    //     stomp.connect({}, function(frame) {
    //         // setConnected(true);
    //         console.log('Connected: ' + frame);
    //         stomp.subscribe('/topic/message', function(data){
    //             // showGreeting(JSON.parse(greeting.body).content);
    //             console.log("Recebi do servidor : "+data);
    //         });
    //     });
    //
    //
    //     // stomp.connect({},function (frame) {
    //     //     console.log("FRAME : "+frame);
    //     //     // stomp.subscribe("/topic/message",function (data) {
    //     //     //     console.log("RECEBI : "+data);
    //     //     // });
    //     // });
    //
    //
    //     // stomp.subscribe("/topic/message",function (data) {
    //     //     console.log("RECEBI : "+data);
    //     // });
    //
    //     // var teste = {contents:"Conteudo",fromUserId:"Gu",toUserId:"Deus"};
    //     //
    //     // stomp.send("/app/chat",{priority: 9},JSON.stringify(teste));
    //
    //
    //     //
    // };
    // //
    // initialize();
    // //
    // var login123 = function(){
    //     var loginT = {};
    //     loginT.username = sessionStorage.username;
    //     loginT.token = sessionStorage.getItem(sessionStorage.username);
    //
    //
    //     // stomp.send("/chat/login", {}, JSON.stringify({
    //     //     login: loginT
    //     // }));
    //     stomp.send("/app/chat",JSON.stringify({contents:"contente123",fromUserId:"Gustavo",toUserId:"Deus"}))
    //     // ChatService.send("/chat/login", {}, JSON.stringify(login));//JSON.stringify({message: login}));
    // };
    // //
    // //
    // //
    // // $scope.sendMessage = function() {
    // //     var destination = "/app/chat";
    // //
    // //     // if($scope.sendTo != "everyone") {
    // //     //     destination = "/chat." + $scope.sendTo;
    // //     //     // $scope.messages.unshift({message: $scope.newMessage, username: 'you', priv: true, to: $scope.sendTo});
    // //     // }
    // //
    // //     // ChatService.send(destination, {}, JSON.stringify({message: $scope.message}));
    // //
    // //     stomp.send(destination, {}, JSON.stringify({
    // //         message: $scope.message
    // //     }));
    // //     $scope.message = '';
    // // };
    // //
    // // $scope.privateSending = function(username) {
    // //     $scope.sendTo = (username != $scope.sendTo) ? username : 'everyone';
    // // };

});