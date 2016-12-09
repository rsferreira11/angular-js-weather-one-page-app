// ROUTES
weatherApp.config(function($routeProvider){
   
    $routeProvider
    
    .when('/', {
        templateUrl: '/assets/pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: '/assets/pages/forecast.html',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'assets/pages/forecast.html',
        controller: 'forecastController'
    })
    
});