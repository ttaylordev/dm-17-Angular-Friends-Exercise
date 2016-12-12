app.controller("mainCtrl", ['$scope', 'friendSvc', function($scope, friendSvc) { // jshint ignore:line
  'use strict';
  $scope.test = 'This is only a test';
  $scope.data = friendSvc.getData();
  $scope.sortProp = 'name';
  $scope.sortDirection = '+';
    
}]); // jshint ignore:line