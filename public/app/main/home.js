angular
    .module('app')
    .controller('HomeController', HomeController);

HomeController.$inject = ['$http'];

function HomeController($http){ 
    $http.get('/api/user/')
    .success(function(data){
        console.log(data)
    })
}