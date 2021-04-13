(fucntion () {
  'use strict';

  angular.module('WordcountApp', [])

  .controller('WordcountController', ['$scope', '$log', '$http'
    function($scope, $log, $http) {
      $scope.getResults = function() {
        $log.log("tastta");

        var userInput = $scope.url;

        $http.post('/start', {"url": userInput}).
          success(function(results) {
            $log.log(results);
          }).
          error(function(error) {
            $log.log(error);
          });
      };
    }
  ]);

}());