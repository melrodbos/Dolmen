/* global angular Firebase */
( function() {
  'use strict';
  var app = angular.module( 'dolmen' );
      app.controller( 'PoLoginController', function( ) {

      var ref = new Firebase( 'https://dolmen.firebaseio.com/dashboard' );
      var self = this;

      self.login = function( ) {
        ref.authWithOAuthRedirect('google', function( error, authData )
        // .then(function($location){
        //   self.login.$location('/dashboard');
        // });
        {
          if ( error ) {
            console.log( "Failed!", error );
          } else {
            console.log("Way to go!");
            //Totally not getting here EVAH'
          }
        });
      };
    }); //End of PoLoginController
})(); //end of IIFE
