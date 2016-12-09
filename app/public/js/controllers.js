// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

    $scope.city = cityService.city;

    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path("/forecast");
    };

}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', '$http', 'cityService', function($scope, $routeParams, $http, cityService){

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    $http({
        method: 'GET',
        url: "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=1c8c9b71a5ecbea2df472cd257cb8e29",
        params: {
            q: $scope.city,
            cnt: $scope.days
        }
    })
    .then(function successCallback(response){
        $scope.weatherResult = response.data;
    });

    $scope.convertToCelsius = function(kelvin) {
        return Math.round(kelvin - 273.15);
    }

    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }
}]);
