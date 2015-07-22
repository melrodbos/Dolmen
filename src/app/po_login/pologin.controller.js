/* global angular */
;(function() {
  'use strict';
//Start of PoLoginController, remember to include dolmen.services as a dependency:
  var app = angular.module('dolmen.login', ['dolmen.services']);
  app.controller('PoLoginController', [
    '$scope',
    'Auth',
    function($scope, Auth) {
      $scope.auth = Auth;
      $scope.user = $scope.auth.$getAuth();

  }
  ]);

})();
