angular.module('app').controller('BookController',
    // function($scope, $resource, $routeParams) {
    function($http, $scope, $routeParams, Book) {

    console.log("Entrei BookController");
     var token ;

    $scope.book = {};

    $scope.usuario = {};

    $scope.cadastro = {};



    $scope.salva = function () {
        console.log("Tentando : "+$scope.book);

        $http.post('http://localhost:8080/api/books',$scope.book.toJSON()).then(function () {
            $scope.mensagem = { texto: 'Salvo com sucesso' };

        }).catch(function (err) {
            console.log(err);
            $scope.mensagem = { texto: 'Não foi possível salvar' };
        });
        };

    $scope.login = function () {

            console.log("Logando : "+$scope.usuario.username+"\nPassword : "+$scope.usuario.password
            );

            $http.post('http://localhost:8080/api/auth',$scope.usuario).then(function (data) {
                $scope.mensagem = { texto: 'Logado com sucesso!' };
                console.log(data.data.token);
                sessionStorage.setItem(data.data.username, data.data.token);
                sessionStorage.username = data.data.username;
                console.log("Achei username : "+ sessionStorage.username);
                window.location = "/#/";


            }).catch(function (err) {
                console.log(err);
                $scope.mensagem = { texto: 'Usuario e/ou senha incorretos ou não existem!' };
            });
        };


        $scope.register = function () {


            console.log("Logando : "+$scope.cadastro.username+"\nPassword : "+$scope.cadastro.password
            );

            $http.post('http://localhost:8080/api/register',$scope.cadastro).then(function () {
                $scope.mensagem = { texto: 'Cadastrado com sucesso!' };
                window.location = "/#/login";


            }).catch(function (err) {
                console.log(err);
                $scope.mensagem = { texto: 'Erro ao Cadastrar!' };
            });
        };





        var books = function(){
            var token = sessionStorage.getItem(sessionStorage.username);
            console.log("Entrei!");
            console.log("TOKEN : "+token);

            $http({
                method: 'GET',
                url: 'http://localhost:8080/api/books',
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                    'X-Auth-Token': token
                }
            })
                .then(function(response) {
                    $scope.books = response.data;

                    }, function(rejection) {
                    console.log(rejection.data);
                });
        };

        books();

        if($routeParams.bookId){
            console.log("Token : "+token);

            $http({
                method: 'GET',
                url: 'http://localhost:8080/api/books/'+ $routeParams.bookId,
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                    'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
                }
            }).then(function(response) {
                    // books();
                    $scope.book = response.data;
                    console.log("Peguei : "+response);
                }, function(rejection) {
                    console.log(rejection.data);
                });

        }else{
            $scope.book = new Book();
        }

        $scope.remove = function(book){

            console.log("Peguei : "+book)
            $http({
                method: 'DELETE',
                url: 'http://localhost:8080/api/books',
                params: {
                    id: book.id
                },
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                    'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
                }
            })
                .then(function(response) {
                    books();
                    console.log("Pegado : "+response);
                }, function(rejection) {
                    console.log(rejection.data);
                });
        }


        $scope.atualizar = function () {
            console.log("CORPO : "+$scope.book.title);
            $http({
                method: 'PUT',
                url: 'http://localhost:8080/api/books',
                data: $scope.book,
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                    'X-Auth-Token': sessionStorage.getItem(sessionStorage.username)
                }
            })
                .then(function(response) {
                    // $scope.books = response.data;
                    $scope.mensagem = { texto: 'Alterado com sucesso' };
                    // console.log("Dentro : "+ JSON.parse(response.data));

                }, function(rejection) {
                    console.log(rejection.data);
                    $scope.mensagem = { texto: 'Não foi possível Alterar' };
                });
        };
    });