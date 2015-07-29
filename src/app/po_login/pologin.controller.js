/* global angular Firebase */
( function() {
  'use strict';

  var app = angular.module( 'dolmen' );
      app.controller( 'PoLoginController', function( ) {

      var newUser = true;
      var ref = new Firebase( 'https://dolmen.firebaseio.com/dashboard' );
      var authData = ref.getAuth();
      if (authData) {
        console.log( 'Property Owner is in!', authData.uid );
      }
      // var self = this;

      this.login = function( ) {
        ref.authWithOAuthRedirect( 'google', function( error ) {
          if ( error ) {
            console.log( "Failed!", error );
          } else {
            console.log( "Way to go!", authData );
            //Totally not getting here EVAH'
          }
        }, {
          remember: 'sessionOnly',
          scope: 'email'
        });
      };
    }); //End of PoLoginController
})(); //end of IIFE
