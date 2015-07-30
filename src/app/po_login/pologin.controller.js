/* global angular Firebase */
( function() {
  'use strict';

  var app = angular.module( 'dolmen' );
      app.controller( 'PoLoginController', function() {

      var newPropertyOwner = true;
      var ref = new Firebase( 'https://dolmen.firebaseio.com/users' );
      var authData = ref.getAuth();
      if (authData) {
        console.log( 'Property Owner is in!', authData.uid );
      }

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

      ref.onAuth( function() {
        if ( authData && newPropertyOwner ) {
          ref.child( 'users' ).child( authData.uid ).set({
            provider: authData.provider,
            name: authData.google.displayName
          });
        }
      });

    }); //End of PoLoginController
})(); //end of IIFE
