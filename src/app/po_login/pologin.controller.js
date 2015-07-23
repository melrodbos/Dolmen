/* global Firebase angular */
(function() {
  'use strict';
//Start of PoLoginController
angular.module('dolmen')
.controller('PoLoginController', function(){
  var ref = new Firebase('https://dolmen.firebaseio.com');
   var self = this;
   self.login = function() {
     ref.authWithOAuthPopup('google', function(error){
       if (error) {
         console.log("Awesomeness!!!", error);
       }
       else {
         //Totally not getting here EVAH'
       }
      //  .then(function(){
      //    $location.path('/dashboard');
      //  });
     });
   };
   self.logout = function() {
     ref.unauth();
     console.log("And you are out! Bammm!");
   };
});//End of PoLoginController
})();//end of IIFE


//---------- TWO ---------------
  // var services = angular.module('dolmen.', ['firebase']);
  // services.controller('PoLoginController', function($scope){
  //   // TODO: Move code from `index.services.js:authServices` in here...
  //
  //   var firebase = new firebase("https://dolmen.firebaseapp.com");
  //   this.email = 0;
  //   var self = this;
  //   this.email = function(){
  //     firebase.authWithOAuthPopup('google', function(error, authData){
  //       // console.log(whaaaaa???);
  //       $scope.$apply(function(){
  //         self.email = authData.google.email;
  //       });
  //     });
  //   };
  //   this.setUser = function(){
  //     return self.email !== 0;
  //   };
  //   });
  //   angular.module('dolmen').constant('FIREBASE_URL', 'http://dolmen.firebaseapp.com');
  // })();
  //
  //
  //



//---------- ONE -----------
  //   authServices = {};
  //
  //   var ref = new Firebase( 'https://dolmen.firebaseio.com' );
  //   authServices.authObj = $firebaseAuth( ref );
  //
  //   authServices.login = function()
  //   {
  //     authServices.authObj.$authWithOAuthPopup( 'google')
  //       .then(function(ref){
  //         $state.go('po_dash');
  //       })
  //       .catch( function( err ){
  //         console.log( err );
  //       });
  //   };
