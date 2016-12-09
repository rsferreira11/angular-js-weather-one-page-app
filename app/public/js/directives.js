// DIRECTIVES
weatherApp.directive('weatherReport', function(){
   return {
       restrict: "E",
       templateUrl: '/assets/directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToCelsius: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   } 
});