















// (function(){
//   'use strict';
//
//   angular.module( 'dolmen', function( $scope, $location, ownerService, FBDolmen, $firebaseAuth ){
//
//     $scope.owner = ownerService.getLoggedInOwner();
//
//     $scope.newThreadTitle = '';
//
//     $scope.threads = threadService.getAllThreads();
//
//     $scope.threads.$loaded().then( function(){
//       // console.log( $scope.threads );
//     });
//
//     $scope.addThread = function(){
//       if( !$scope.newThreadTitle ){
//         // FIXME: Preventing Event Propagation in AngularJs.
//         return false;
//       }
//       var newThread = {
//         username: $scope.owner.name,
//       };
//
//       $scope.threads.$add( newThread );
//
//       $scope.newThreadTitle = '';
//     };
//
//     $scope.logout = function(){
//       var ref = new Firebase( FBDolmen.url );
//       var authObj = $firebaseAuth( ref );
//       authObj.$unauth();
//       $location.path( '/' );
//     };
//   });
//
// });
