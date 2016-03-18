angular
    .module('app')
    .config(Configuration);

Configuration.$inject = ['$urlRouterProvider','$stateProvider','$locationProvider'];

function Configuration($urlRouterProvider,$stateProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url:'/',
        templateUrl: 'app/main/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
    })
    
    $locationProvider.html5Mode({
        enabled: true
    });
}