/* global angular Firebase */

// ( function(){
//   'use strict';
//
//   var app = angular.module( 'dolmen.auth' );
//
//   app.service('authService', function( $firebase, FBDolmen ){
//     var ref = new Firebase( FBDolmen );
//
//     this.user = ref.getAuth();
//
//     var saveNewUser = function( userObj ){
//       ref.child( 'users' ).child( userObj.id ).set( userObj );
//     };
//     // Login method:
//     this.isLoggedIn = function(){
//       // turn it into a boolean:
//       return !!ref.getAuth();
//     };
//     this.loginWithPW = function( userObj, cb, cbOnReg ){
//       ref.authWithPassword( userObj, function( error, authData ){
//         if( error ){
//           console.log( 'No way Jose!' );
//         } else {
//           authData.email = userObj.email;
//           this.user = authData;
//           cb( authdata );
//           cbOnReg && cbOnReg( true );
//         }
//       }.bind( this ));
//     };
//     // Login with Popup:
//     this.loginWithOAuthPopup = function( service, cb ){
//       ref.authWithOAuthPopup( service, function( error, authData ){
//         if( error ) {
//           console.log( 'Error on login:', error.message );
//         } else {
//           addNewUserToFB( authData );
//           this.cachedUser = authData;
//         }
//       }.bind( this ));
//     };
//     // User method:
//     this.createUser = function( user, cb ){
//       ref.createUser( user, function( error, userData ){
//         if ( error ) {
//           switch ( error.code ) {
//             case "EMAIL_TAKEN":
//               console.log( "the new user account cannot be created because...");
//               break;
//             case "INVALID_EMAIL":
//               console.log( "the specified email is not a valid email.");
//               break;
//             default:
//               console.log( "Error creating user:", error);
//           }
//         } else {
//           this.loginWithPW( user, function(){
//             saveNewUser( authData );
//           }, cb );
//         }
//       }.bind( this ));
//     };
//     // Logout method:
//     this.logout = function(){
//       ref.unauth();
//       this.cachedUser = null;
//       return true;
//     }.state.go('/');
//   });
// });



























// ( function() {
//   'use strict';
//   //The following will run on load:
//   var app = angular.module( 'dolmen.auth' );
//
//   app.service( 'ownerService', function( $firebaseAuth, FBDolmen, $location){
//
//     // var owner = {
//     //     name: ''
//     // };
//
//     var ref = new Firebase( FBDolmen );
//     var authObj = $firebaseAuth( ref );
//
//     // Put the user object if logedin on page refresh:
//     var information = authObj.$getAuth();
//     if( information ){
//     owner.name = information.google.displayName;
//     }
//     // End
//
//     // console.log(information);
//
//     this.getLoggedInOwner = function(){
//       return owner;
//     };
//
//     this.googleLogin = function(){
//       authObj.$authWithOAuthRedirect( 'google' ).then( function( authData ){
//         owner.name = authData.google.displayName;
//         $location.path( '/dashboard' );
//       }).catch( function( error ){
//         console.error( "Totally failed:", error );
//       });
//     };
//
//     this.logout = function(){
//       authObj.$unauth();
//       $location.path( '/' );
//     };
//   });
// })(); //end of IIFE


  // var services = angular.module( 'dolmen.services', ['firebase'] );
  // services.factory( 'currentOwner', function( $firebaseObject, $state){
  //   var auth = new Firebase( 'https://dolmen.firebaseio.com/' );
  //   var currentOwner = { };
  //
  //   return {
  //     onAuth: function( credentials ){
  //       auth.onAuth( function( data ){
  //         credentials( updateOwner( data ) );
  //       });
  //     },
  //
  //     googleLogin: function(){
  //
  //       return auth.authWithRedirect( 'google', function( error, authData ){
  //         if ( error ) {
  //           console.log( 'You are not authenticated!', error );
  //         } else {
  //           $state.go( '/dashboard' );
  //           console.log( 'Property Owner is in!', authData);
  //         }
  //       }, { remember: 'sessionOnly'});
  //     },
  //     logout: function(){
  //       auth.unauth();
  //       $state.go('/');
  //       console.log( 'Adios amigo...');
  //     },
  //     loggedIn: function(){
  //       if( auth.getAuth() ){
  //         return true;
  //       } else {
  //         $state.go( '/' );
  //       }
  //     }
  //   };
  //   function UpdateOwner( authOwner ){
  //     if ( authOwner === null ){
  //       return null;
  //     }
  //     var owner = auth.child( 'owners' ).child( authOwner.google.id);
  //
  //     user.update({
  //       google: authdOwner.google,
  //       uid: authdOwner.google.id,
  //       fullName: authdOwner.google.displayName
  //     });
  //     owner = $firebaseObject( auth.child( 'owners').child(authdOwner.google.id));
  //     return owner;
  //   }
  // });

// })(); //end of IIFE





// var app = angular.module( 'dolmen' );
//     app.controller( 'PoLoginController', function($state) {
//
//     var ref = new Firebase( 'https://dolmen.firebaseio.com/users' );
//     var authData = ref.getAuth();
//     if (authData) {
//       console.log( 'Property Owner is in!', authData.uid );
//     }
//
//     this.login = function( ) {
//       ref.authWithOAuthRedirect( 'google', function( error ) {
//         if ( error ) {
//           console.log( "Failed!", error );
//         } else {
//           console.log( "Way to go!", authData );
//           //Totally not getting here EVAH'
//         }
//       }, {
//         remember: 'sessionOnly',
//         scope: 'email'
//       });
//     };
//
//   }); //End of PoLoginController
