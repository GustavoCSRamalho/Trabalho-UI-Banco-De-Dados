angular.module("app").controller("ChatController", function($scope,$timeout) {

    $scope.privateMessage = [];
    $scope.publicMessage = [];
    $scope.participantes = [];
    $scope.username = sessionStorage.username;
    $scope.sendTo = 'everyone';
    var RECONNECT_TIMEOUT = 30000;
    var stomp;
    console.log("Cheguei")

    // var reconnect = function() {
    //     $timeout(function() {
    //         initialize();
    //     }, RECONNECT_TIMEOUT);
    // };

    var startListener = function() {
        // console.log("2");
        stomp.subscribe("/topic/message", function(data) {
            this.publicMessage.push(data);
            console.log("Publico : "+data);

        });
        // login123();
    };
    //
    var initialize = function() {
        var client = "ws://192.168.8.108:8080/chat";
        stomp = Stomp.over(client);

        stomp.connect({},function (frame) {
            console.log("FRAME : "+frame);
            stomp.subscribe("/topic/message",function (data) {
                console.log("RECEBI : "+data);
            });});

        // var teste = {contents:"Conteudo",fromUserId:"Gu",toUserId:"Deus"};
        // stomp.send(teste);


        //
    };
    //
    initialize();
    //
    var login123 = function(){
        var loginT = {};
        loginT.username = sessionStorage.username;
        loginT.token = sessionStorage.getItem(sessionStorage.username);


        // stomp.send("/chat/login", {}, JSON.stringify({
        //     login: loginT
        // }));
        stomp.send("/app/chat",{},JSON.stringify({contents:"contente123",fromUserId:"Gustavo",toUserId:"Deus"}))
        // ChatService.send("/chat/login", {}, JSON.stringify(login));//JSON.stringify({message: login}));
    };
    //
    //
    //
    // $scope.sendMessage = function() {
    //     var destination = "/app/chat";
    //
    //     // if($scope.sendTo != "everyone") {
    //     //     destination = "/chat." + $scope.sendTo;
    //     //     // $scope.messages.unshift({message: $scope.newMessage, username: 'you', priv: true, to: $scope.sendTo});
    //     // }
    //
    //     // ChatService.send(destination, {}, JSON.stringify({message: $scope.message}));
    //
    //     stomp.send(destination, {}, JSON.stringify({
    //         message: $scope.message
    //     }));
    //     $scope.message = '';
    // };
    //
    // $scope.privateSending = function(username) {
    //     $scope.sendTo = (username != $scope.sendTo) ? username : 'everyone';
    // };

});