( function(){
  'use strict';

  var app = angular.module ( 'dolmen' );
      app. controller ( 'LogoutController', function( Auth ) {
        this.logout = Auth.logout;
          console.log( "Out the door..." );
      });
})();//End of IIFE
