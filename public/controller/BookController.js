angular.module('app').controller('BookController',
    // function($scope, $resource, $routeParams) {
    function($http, $scope, $routeParams, Book) {

    console.log("Entrei BookController");

    $scope.book = {};


    $scope.salva = function () {

        console.log("Tentando : "+$scope.book);

        $http.post('http://localhost:8080/books',$scope.book.toJSON()).then(function () {
            $scope.mensagem = { texto: 'Alterado com sucesso' };

        }).catch(function (err) {
            console.log(err);
            $scope.mensagem = { texto: 'Não foi possível Alterar' };
        });
        };


        $scope.pega = function (){


        };


        var books = function(){
            Book.query(function(book) {
                $scope.books= book;
            });
        }

        books();

        if($routeParams.bookId){
            Book.get({id: $routeParams.bookId},
                function(book) {
                    $scope.book= book;
                }, function(erro) {
                    $scope.mensagem = {texto: 'Não foi possivel obter o contato.'};
                    console.log(erro);
                }
            );
        }else{
            $scope.book = new Book();
        }

        $scope.remove = function(book){
            console.log("Peguei : "+book)
            $http({
                method: 'DELETE',
                url: 'http://localhost:8080/books',
                params: {
                    id: book.id
                },
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                }
            })
                .then(function(response) {
                    books();
                    console.log(response.data);
                }, function(rejection) {
                    console.log(rejection.data);
                });
        }


        $scope.atualizar = function () {

            console.log($scope.book);
            $http.put('http://localhost:8080/books',$scope.book.toJSON()).then(function () {
                    $scope.mensagem = { texto: 'Alterado com sucesso' };
                }).catch(function (erro) {
                        // console.log(err);
                        $scope.mensagem = { texto: 'Não foi possível Alterar' };
                    });


        };



    });