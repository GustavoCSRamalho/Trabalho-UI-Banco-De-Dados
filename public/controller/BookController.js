angular.module('app').controller('BookController',
    // function($scope, $resource, $routeParams) {
    function($http, $scope, $routeParams, Book) {

    console.log("Entrei BookController");



    // $scope.books = [{'id':'1','title':'ola','price':'12','description':'ola mundo'}]

    $scope.book = {};


    $scope.salva = function () {
            //Como 'contato' é um objeto retornado de $resource é adicinado funções adicionais ao nosso objeto sem sabermos
            // A função $save gera por debaixo dos panos uma requisição do tipo POST que envia para http://localhost/contatos
        console.log("Tentando : "+$scope.book);
        $http.post('http://localhost:8080/books',$scope.book.toJSON()).then(function () {
            console.log("Tentando pegar!");
            // console.log("Achei : "+JSON.valueOf(book));
            // console.log("Book : "+JSON.stringify($scope.book));
            $scope.mensagem = { texto: 'Alterado com sucesso' };
            // limpa o formulário
            // $scope.dados = new DadosEmpresa();

        }).catch(function (err) {
            console.log(err);
            $scope.mensagem = { texto: 'Não foi possível Alterar' };
        });

        };

        $scope.pega = function (){


        };

        var buscaBook = function(){
            Book.query(function(book) {
                $scope.books= book;
            });
        }
        // Book.query(function(book) {
        //     $scope.books= book;
        // });

        buscaBook();

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


        $scope.atualizar = function () {
            //Como 'contato' é um objeto retornado de $resource é adicinado funções adicionais ao nosso objeto sem sabermos
            // A função $save gera por debaixo dos panos uma requisição do tipo POST que envia para http://localhost/contatos
            // $scope.book.$save()
            //     .then(function () {
            //         $scope.mensagem = { texto: 'Salvo com sucesso' };
            //         // limpa o formulário
            //         // $scope.book = new Book();
            //
            //     })
            //     .catch(function (erro) {
            //         $scope.mensagem = { texto: 'Não foi possível salvar' };
            //     });
            console.log($scope.book);
            $http.put('http://localhost:8080/books',$scope.book.toJSON()).then(function () {
                    // console.log("Tentando pegar!");
                    // console.log("Achei : "+JSON.valueOf(book));
                    // console.log("Book : "+JSON.stringify($scope.book));
                    $scope.mensagem = { texto: 'Alterado com sucesso' };
                    // limpa o formulário
                    // $scope.dados = new DadosEmpresa();

                }).catch(function (erro) {
                        // console.log(err);
                        $scope.mensagem = { texto: 'Não foi possível Alterar' };
                    });

            // Book.put({book:$routeParams.book}, function () {
            //     $scope.mensagem = {texto: 'Atualizado com sucesso.'};
            // }, function (erro) {
            //     $scope.mensagem = {texto: 'Não foi possivel atualizar o book.'};
            //     console.log(erro);
            // });
        };

        $scope.teste = function(book){
            console.log("clicado");
        }

        $scope.remove = function(book){
            console.log(book);
            $http({
                method: 'DELETE',
                url: 'http://localhost:8080/books',
                params : {id:book.id},
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                }
            })
                .then(function(response) {
                    console.log(response.data);
                    console.log("Foi!");
                }, function(rejection) {
                    console.log(rejection.data);
                    console.log("Não foi!");
                });



        }





        // $http.get('http://localhost:8080/books').then(function (book) {
        //     // console.log("Tentando pegar!");
        //     // console.log("Achei : "+JSON.stringify(book));
        //     $scope.books = book.data;
        //     $scope.mensagem = { texto: 'Salvo com sucesso' };
        //     // limpa o formulário
        //     // $scope.dados = new DadosEmpresa();
        //
        // })
        //     .catch(function (err) {
        //         console.log(err);
        //         $scope.mensagem = { texto: 'Não foi possível salvar' };
        //     });

    });