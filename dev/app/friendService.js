app.service("friendSvc", [
  '$http',
  function($http) {
    'use strict';
    this.getData = function() {
      return $http({method: 'GET', url: 'friend-data.json'}).then(function(response) {
        return response.data;
      });
    };
  }
]);