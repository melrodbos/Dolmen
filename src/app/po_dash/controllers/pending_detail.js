(function(){
  'use strict';

  angular.module( 'dolmen.pendingDetail', [ ])
  .controller('PendingController', function( $firebaseObject, Maintenance, $state, $scope, FBDolmen ){

    var pending = { };
    var firebaseDetail = new Firebase( FBDolmen + '/requests' );

    firebaseDetail.data = $firebaseObject(firebaseDetail);
    console.log(firebaseDetail.data);
    $scope.filterPending = function( req ){ return req.status === 'Pending'; };

    firebaseDetail.display = function(){
      firebaseDetail.data.$add({
        date: firebaseDetail.date,
        category: firebaseDetail.category,
        adddress: firebaseDetail.address,
        tenant: firebaseDetail.tenant,
        phone: firebaseDetail.phone,
        email: firebaseDetail.email,
        description: firebaseDetail.description,
        instructions: firebaseDetail.instructions,
        comments: firebaseDetail.comments
      }).state.go('pending');
      };
    });

})();












// (function(){
//   'use strict';
//
//   angular.module('dolmen.pendingDetail', ['dolmen.services', 'dolmen.dashboard',  'ngStorage'])
//   .controller('PendingController', [ '$rootScope', '$scope', 'Maintenance', '$sessionStorage', '$timeout', function( $rootScope, $scope, Maintenance, $sessionStorage, $timeout){
//
//     var pending = this;
//     pending.requests = [ ];
//
//     Maintenance.getRequests($sessionStorage.ownerSession.google.id);
//     $rootScope.$on('requestsRetrieved', function(){
//       $timeout( function(){
//         pending.requests = Maintenance.requests;
//         pending.requests = $.map(pending.requests, function( value, index ){
//           value.dbId = index;
//           return [value];
//         });
//       });
//     });
//     $scope.filterPending= function ( req ){ return req.status === 'Pending';};
//
//   }])
//   .run( function( editableOptions ){
//           editableOptions.theme = 'bs3';
//   })
//   .run([$rootScope.]);
// })();









//
// $scope.add = function(){
//   var save = Maintenance.$add({
//     date: $scope.date,
//     category: $scope.category,
//     status: $scope.status,
//     address: $scope.address,
//     tenant: $scope.tenant,
//     phone: $scope.phone,
//     email: $scope.email,
//     description: $scope.description,
//     comments: $scope.comments
//   });
//   if(save){
//     alert('Saved!');
//   } else {
//     alert('Something went wrong');
//   }
// };
//
// $scope.maintenance = Maintenance;
//
// $scope.remove = function(id){
//   Maintenance.$remove(id);
// };














// (function(){
//   'use strict';
//
//   var pd = angular.module( 'dolmen.pendingDetail', [ 'firebase' ]);
//   pd.controller( 'PendingController', function( $http, $scope ){
//     var list = this;
//     list.details = [ ];
//
//     $http.get( 'https://dolmen.firebaseio.com/requests' )
//     .then( function( response ){
//       console.log( response );
//       list.details = response.data;
//     });
//     pd.run( function( editableOptions ){
//       console.log( editableOptions )
//       editableOptions.theme = 'bs3';
//     });
//     $scope.user = {
//       date: 'detail.date',
//       category: 'detail.category',
//       address: 'detail.address',
//       tenant: 'detail.tenant',
//       address: 'detail.address',
//       phone: 'detail.phone',
//       email: 'detail.email',
//       description: 'detail.description',
//       Comments: 'detail.comments'
//     };
//
//   });
// })();






// (function() {
//   'use strict';
//
//   angular.module('dolmen.pendingDetail', [])
//     .controller('PendingController', function($scope, Auth) {
//       $scope.add = function() {
//         var save = Auth.$add({
//           date: $scope.date,
//           category: $scope.category
//         });
//
//         $scope.date = '';
//         $scope.category = '';
//
//         if (save) {
//           alert('saved successfully');
//         } else {
//           alert('something went wrong');
//         }
//       }
//       $scope.Auth = Auth;
//     });
// })();



// (function(){
//   'use strict';
//
//   angular.module('dolmen.pendingDetail', [])
//   .controller('PendingController', function($scope, Pending){
//     $scope.add = function() {
//       var save = Details.$add({
//         date: $scope.date,
//         category: $scope.category
//       });
//
//       $scope.date = '';
//       $scope.category = '';
//
//       if(save){
//         alert('Saved successfully');
//       } else {
//         alert('something went wrong');
//       }
//
//       $scope.details = Details
//     };
//
//   });
// })();



//
// (function() {
//   'use strict';
//
//   var pd = angular.module( 'dolmen.pendingDetail', ['dolmen.services', 'ngStorage'] );
//   pd.controller( 'PendingController', [ 'Auth', '$http', '$scope', '$sessionStorage', '$state',
//   function( Auth, $http, $scope, Maintenance, $sessionStorage, $state ){
//
//     var display = this;
//     display.details = { };
//
//     // display.submit = function(){
//     //   Maintenance.addRequest({
//     //     date: display.date,
//     //     category: display.category,
//     //     address: display.address,
//     //     phone: display.phone,
//     //     email: display.email,
//     //     description: display.description,
//     //     status: display.status,
//     //     iod: $sessionStorage.ownerSession.google.id
//     //   });
//     //   $state.go( 'dashboard' );
//     // };
//
//     $http.get( FBDolmen + '/requests' + '/owners' + '/owner:id' + '.json' )
//       .then( function( responses ){
//         console.log( responses );
//         display.detalles = responses.data;
//       });
//
//       pd.run( function( editableOptions ){
//         editableOptions.theme = 'bs3';
//       });
//
//       $scope.owner = {
//           date: 'display.date',
//           category: 'display.category',
//           address: 'display.address',
//           tenant: 'display.tenant',
//           phone: 'display.phone',
//           email: 'display.email',
//           description: 'display.description',
//           comments: 'display.comments',
//           status: 'display.status',
//       iod: $sessionStorage.ownerSession.google.id
//       };
//   }]);
// })();
//








// var firebaseOne = new Firebase( FBDolmen + '/owners' + '.json' );
//
// display.data = $firebaseArray( firebaseOne );
// console.log( display.data );

// display.submit = function() {
//   display.data.$add({
//     date: display.date,
//     category: display.category,
//     address: display.address,
//     tenant: display.tenant,
//     phone: display.phone,
//     email: display.email,
//     description: display.description,
//     comments: display.comments,
//     status: display.status,
//     iod: $sessionStorage.ownerSession.google.id
//
//   });
//   $state.go('/dashboard');
// };




// var firebase = new Firebase( 'https://dolmen.firebaseio.com');
// self.data = $firebaseArray(firebase);
// console.log(self.data);
// self.submit = function() {
//   self.data.$add({
//     date: self.date,
//     category: self.category,
//     status: self.status
//   }).then( function(){
//     $location.path('/dashboard');
//   });
// };
