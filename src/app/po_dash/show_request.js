
(function(){
  'use strict';
    var app = angular.module('dolmen');

      app.controller('ShowController', function( $http, $scope ) {

        var show = this;
        this.request = { };
        // console.log(this.request);

        this.addRequest = function( info ) {
          // this.request.createdOn = Date.now();
          info.requests.push( this.request );
          this.request = { };
        };
        $http.get( 'https://dolmen.firebaseio.com/' + '.json' )
        .then( function( response ){
          console.log(response.data);
          show.requests = response.data;
        });
      });
    })();
