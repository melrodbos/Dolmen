(function (){
  'use strict';

  var app = angular.module( 'dolmen' );
  app.controller('LoginController', function( $scope, $location, ownerService ){
    $scope.googleLogin = function(){
      ownerService.googleLogin();
    };
  });


});
