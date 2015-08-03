( function(){
  'use strict';

  var app = angular.module( 'dolmen');
  app.controller( 'LoginController', function( FBDolmen, $state ){
    // var newOwner = true;
    var firebaseLogin = new Firebase( FBDolmen );
    var authData = firebaseLogin.getAuth();
    if ( authData ) {
      console.log( 'Property owner is in', authData.uid );
    }
    this.login = function(){
      firebaseLogin.authWithOAuthRedirect( 'google', function( error ){
        if ( error ) {
          console.log( 'Total Fail...', error );
        } else {
          console.log( 'Authenticated successfully with playload:', authData );
        }
      }, {
        remember: 'sessionOnly',
        scope: 'email'
      });
    };

    firebaseLogin.onAuth( function(){
      if ( authData && newOwner ){
        firebaseLogin.child( 'owners' ).child( authData.uid ).set({
          provider: authData.provider,
          name: authData.google.displayName
        });
      }
    });
  });
})();














// (function (){
//   'use strict';
//
//   var app = angular.module( 'dolmen' );
//
//   app.controller('LoginController', function( $scope, $state, authService ){
//     $scope.user = {};
//     $scope.login = function(){
//       var userObj = {
//         email: $scope.user.email,
//         password: $scope.user.pw
//       };
//
//       $scope.user.email = '';
//       $scope.user.pw = '';
//       // We invoke the following fn to take us to the dashboard:
//       authService.loginWithPW( userObj, function (){
//         $state.go( '/dashboard' );
//       });
//     };
//   });
// });



// (function(){
//   'use strict';
//
//   var app = angular.module( 'dolmen' )
//   app.service( 'Auth', function( $firebaseAuth, $state ) {
//
//     var ref = new Firebase( 'https://dolmen.firebaseio.com'  );
//     var currentOwner = {};
//     return {
//       ownerAuth: $firebaseAuth( ref ),
//       LoginWithGoogle: function(){
//         ref.authWithOAuthRedirect( 'google', function() {
//           console.log( 'Property Owner is in!' );
//
//         }, {
//           remember: 'sessionOnly',
//           scope: 'email'
//         });
//       },
//       authStatus: function(){
//         return ref.getAuth();
//       },
//       logout: function(){
//         ref.unauth();
//         console.log( 'Au revoir mes amies!')
//       },
//     },
//
//   });
// });
