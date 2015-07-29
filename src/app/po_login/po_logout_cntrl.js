/* global angular Firebase */
( function(){
  'use strict';

  var app = angular.module ( 'dolmen' );
      app. controller ( 'PoLogoutController', function( ) {
        var ref = new Firebase( 'https://dolmen.firebaseio.com/' );
        this.logout = function( ) {
          ref.unauth( );
          console.log( "Out the door..." );
        };
      });

})();//End of IIFE
