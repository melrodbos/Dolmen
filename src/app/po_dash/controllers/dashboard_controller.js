// (function(){
//   'use strict';
// //FIXME: how do I make this work!!!:
//   var app = angular.module( 'dolmen' );
//   app.filter( 'requestfilter', function ( FBDolmen, $location ){
//     return function ( input ) {
//       var filtered = { };
//       angular.forEach( input, function ( request, id ){
//         var path = $location.path(/* path here*/);
//         if ( status === '/pending' ) {
//           if ( !request.completed ) {
//             filtered[ id ] = request;
//           }
//         } else if ( status === '/active' ) {
//           if ( !request.completed ) {
//             // then location.path('/')
//             filtered[ id ] = request;
//           }
//         } else if ( status === '/completed' ) {
//           if ( request.completed ) {
//             filtered[ id ] = request;
//           }
//         } else {
//           filtered[ id ] = request;
//         }
//       });
//       return filtered;
//     };
//   });
//
//
//
//
//
//
// })();















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
