(function() {
  'use strict';

  var app = angular.module( 'dolmen' );
  app.controller( 'PendingController', function( $firebaseArray, $location, $http, $scope ){

    var display = this;
    display.detalles = [ ];

    $http.get( 'https://dolmen.firebaseio.com/' + 'json' )
      .then( function( responses ){
        console.log( responses );
        display.detalles = responses.data;
      });

      app.run( function( editableOptions ){
        editableOptions.theme = 'bs3';
      });

      $scope.user = {
          date: 'detalle.date',
          category: 'detalle.category',
          address: 'detalle.address',
          tenant: 'detalle.tenant',
          phone: 'detalle.phone',
          email: 'detalle.email',
          description: 'detalle.description',
          comments: 'detalle.comments',
          status: 'detalle.status'
      };

      var firebaseOne = new Firebase( 'https://dolmen.firebaseio.com/' );

      display.data = $firebaseArray( firebaseOne );
      console.log( display.data );

      display.submit = function() {
        display.data.$add({
          date: display.date,
          category: display.category,
          address: display.address,
          tenant: display.tenant,
          phone: display.phone,
          email: display.email,
          description: display.description,
          comments: display.comments,
          status: display.status

        }).then (function(){
          $location.path( '/pending' );
        });
      };




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

  });
})();
