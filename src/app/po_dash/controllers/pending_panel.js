//
// ( function(){
//   'use strict';
//     var app = angular.module( 'dolmen' );
//
//       app.controller('ShowController', function( FBDolmen, $http, $stateParams ) {
//
//         var show = this;
//         show.request = [ ];
//         console.log( show.request );
//
//         show.addRequest = function( info ) {
//           // this.request.createdOn = Date.now();
//           info.requests.push( this.request );
//           this.request = { };
//         };
//         $http.get( FBDolmen + '/owners' + '.json' )
//         .then( function( responses ){
//           show.requests = responses.data;
//           console.log( responses.data );
//         });
//       });
//     })();
