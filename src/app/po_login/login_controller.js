(function (){
  'use strict';

  var app = angular.module( 'dolmen' );

  app.controller('LoginController', function( $scope, $state, authService ){
    $scope.user = {};
    $scope.login = function(){
      var userObj = {
        email: $scope.user.email,
        password: $scope.user.pw
      };

      $scope.user.email = '';
      $scope.user.pw = '';
      // We invoke the following fn to take us to the dashboard:
      authService.loginWithPW( userObj, function (){
        $state.go( '/dashboard' );
      });
    };
  });


});
