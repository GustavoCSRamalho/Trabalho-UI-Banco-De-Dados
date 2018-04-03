angular.module('app').factory('Book', function($resource) {
    return $resource('/books/:id');
});
