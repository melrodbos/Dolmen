// (function(){
//   'use strict';
//
//   var pd = angular.module ( 'dolmen.pF', [ ]);
//   pd.factory('Pending', function($firebaseArray, $firebaseObject, FBDolmen){
//
//     var ref = new Firebase(FBDolmen);
//     var details = $firebaseArray(ref.child('details'));
//
//     var Detail = {
//       all: details,
//       create : function(detail){
//         return details.$add(detail);
//       },
//       get : function(detailId){
//         return $firebaseObject(ref.child('details').child('detailId'));
//       },
//       delete : function(detail){
//         return details.$remove(detail);
//       }
//     };
//     return Detail;
//   });
// })();
