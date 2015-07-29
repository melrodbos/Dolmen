/* global angular Firebase */
( function() {
  'use strict';

  var app = angular.module( 'dolmen' );
      app.controller( 'PoLoginController', function( ) {

      var ref = new Firebase( 'https://dolmen.firebaseio.com/dashboard' );
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
      // this.logout = function( ) {
      //   if ( logout ) {
      //     console.log( "Out the door..." )
      //   }
      //   ref.unauth( );
      // };

    }); //End of PoLoginController
})(); //end of IIFE
