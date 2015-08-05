(function(){
  'use strict';

  angular.module( 'dolmen' )
  .factory( 'Auth', function( FBDolmen, $firebaseObject, $state ){

    var auth = new Firebase( FBDolmen );
    var currentOwner = { };

    return {
      onAuth: function( credentials ){
        auth.onAuth( function( data ){
          credentials( updateOwner( data ));
        });
      },
      googleLogin: function(){

        return auth.authWithOAuthRedirect( 'google', function( error, authData ){
          console.log( authData );
          if ( error ){
            console.log( 'Authentication Failed', error );
          } else {
            $state.go( '/dashboard' );
            console.log( 'Authenticated successfully with payload, authData' );
          }
        }, { remember: 'sessionOnly' });
      },
      logout: function(){
        auth.unauth();
        $state.go( 'home' );
      },
      loggedIn: function(){
        if ( auth.getAuth() ){
          return true;
        } else {
          $state.go( 'home' );
        }
      }
    };
    function updateOwner( authdOwner ){
      if ( authdOwner === null ){
        return null;
      }
      // owners/owner:id
      var owner = auth.child( 'owners' ).child( authdOwner.google.id );

      owner.update({
        google: authdOwner.google,
        uid: authdOwner.google.id,
        fullName: authdOwner.google.displayName
      });
      owner = $firebaseObject( auth.child( 'owners' ).child( authdOwner.google.id));
      return owner;
    }
  });
})();





//---------------------------------------------
  // ( function(){
//   'use strict';
//
//   var app = angular.module( 'dolmen');
//   app.controller( 'LoginController', function( FBDolmen ){
//     var newOwner = true;
//     //when I login I start here:
//     var firebaseLogin = new Firebase( FBDolmen );
//     var authData = firebaseLogin.getAuth();
//     if ( authData ) {
//       console.log( 'Property owner authenticated with uid:', authData.uid );
//     }
//     this.login = function(){
//       firebaseLogin.authWithOAuthRedirect( 'google', function( error ){
//         if ( error ) {
//           console.log( 'Total Fail...', error );
//         } else {
//           console.log( 'Authenticated successfully with playload:', authData );
//         }
//       }, {
//         remember: 'sessionOnly',
//         scope: 'email'
//       });
//     };
//
//     firebaseLogin.onAuth( function(){
//       if ( authData && newOwner ){
//         // I want the saved id to be stored here:
//         firebaseLogin.child( 'owners' ).child( authData.uid ).set({
//           provider: authData.provider,
//           name: authData.google.displayName
//         });
//       }
//     });
//   });
// })();



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
