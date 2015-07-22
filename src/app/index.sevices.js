/* global angular Firebase */
;(function(){
  'use strict';

  var services = angular.module( 'dolmen.services', ['firebase']);

  services.factory( 'authServices', [
    '$state',
    '$timeout',
    '$firebaseAuth',
    function( $state, $timeout, $firebaseAuth )
    {
      authServices = {};

      var ref = new Firebase( 'https://dolmen.firebaseio.com' );
      authServices.authObj = $firebaseAuth( ref );

      authServices.login = function()
      {
        authServices.authObj.$authWithOAuthPopup( 'google')
          .then(function(ref){
            $state.go('po_dash');
          })
          .catch( function( err ){
            // console.log( err );
          });
      };
    }
  ]);

})();
