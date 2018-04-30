'use strict';

angular.module('app').controller('chatController',['ChatSocket','$scope',function (chatSocket,$scope) {

    var stompClient;

    var initStompClient = function () {
        // chatSocket.init('/chat');

        var socket = new WebSocket('ws://localhost:8080/chat/websocket');
        stompClient = Stomp.over(socket);
        stompClient.debug = null;
        stompClient.heartbeat.outgoing = 1000;

        stompClient.connect({}, function (frame) {
            console.log(frame);

            stompClient.subscribe("/topic/message", function (message) {
                console.log("Rec Serv : "+message);
            });


            var parsed = JSON.stringify({
                contents:"Euuuu",
                fromUserId:"1",
                toUserId:"2"
            });
            stompClient.send("/msg", {}, parsed);
        });






        // chatSocket.connect({},function (frame) {
        //
        //
        //     console.log("1"+frame);
        // //
        // //     chatSocket.subscribe("/topic/message", function (message) {
        // //
        // //         // removeIfIsTyping();
        // //         // $scope.messages.push(JSON.parse(message.body));
        // //         console.log("R : "+message);
        // //     });
        //
        //
        // //
        // }, function (error) {
        //     // toaster.pop('error', 'Error', 'Connection error ' + error);
        //     console.log('erro');
        //     console.log(error);
        // }
        // )
        // // chatSocket.onopen = function (msg) {
        // //     console.log("A : "+msg);
        // // }
        // ;



        // chatSocket.send("/topic/chat", {}, parsed);

    };

    initStompClient();

    $scope.vai = function () {
        console.log("1");
        var parsed = JSON.stringify({
            contents:"Euuuu",
            fromUserId:"1",
            toUserId:"2"
        });
        stompClient.send("/topic/msg", {}, parsed);
        console.log("2");
    }



    // var  stompClient;
    // var init  = function () {
    //     var socket = new WebSocket('ws://localhost:8080/chat/websocket');
    //
    //     stompClient = Stomp.over(socket);
    //     stompClient.onopen = function() {
    //         console.log('open')
    //     }
    //     stompClient.debug = null;
    //     stompClient.heartbeat.outgoing = 1000;
    //     stompClient.connect({}, function (frame) {
    //
    //         stompClient.subscribe("/topic/message",function (message) {
    //             console.log("Message Servidor : ");
    //             console.log(message);
    //         });
    //
    //
    //     });
    //
    // //     var parsed = JSON.stringify({contents:"Euuuu",fromUserId:"1",toUserId:"2"});
    // //     console.log("Parsed : ");
    // //     console.log(parsed);
    // //
    // //
    // //     stompClient.send("/topic/chat",{},parsed);
    // };
    //
    // init();
}]);