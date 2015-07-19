;(function() {
  'use strict';
//Start of PoLoginController:
  var app = angular.module('dolmen.login', ['dolmen.services'])
  app.controller('PoLoginController', [
    '$scope',
    'authServices',
    function( $scope, authServices ) {
      $scope.login = function(event) {
      event.preventDefault();
      authServices.login(this.model.user, this.model.pass);
    };
  }
  ]);

})();
