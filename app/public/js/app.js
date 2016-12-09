// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);