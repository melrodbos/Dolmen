(function(){
  'use strict';

  angular.module( 'dolmen' )
  .factory( 'Auth', function( FBDolmen, $firebaseAuth, $firebaseObject, $state, $sessionStorage ){

    var auth = new Firebase( FBDolmen );
    var authObj = $firebaseAuth( auth );
    var currentOwner = { };

    return {
      googleLogin: function(){
        authObj.$authWithOAuthPopup( "google" ).then( function( authData ) {
          getOwner();
          $state.go( 'dashboard' );
        }).catch( function( error ) {
          console.error( "Authentication failed:", error );
        });

      },
      logout: function(){
        auth.unauth();
        $sessionStorage.ownerSession = null;
        $state.go( 'main' );
      },
      loggedIn: function(){
        if ( auth.getAuth() ){
          return true;
        } else {
          $state.go( 'main' );
        }
      }
    };

    // I need the owner id stored in session data:
    function getOwner( ){

      $sessionStorage.ownerSession = authObj.$getAuth();
      // console.log( authObj.$getAuth() );
      return null;

    }
  });
})();
