(function() {
  'use strict';

  var app = angular.module( 'dolmen' );
  app.controller( 'PendingController', function( $http, $scope ){

    var display = this;
    display.details = [ ];

    $http.get( 'app/po_dash/request_2.json' )
      .then( function( response ){
        console.log( response );
        display.details = response.data;
      });

      app.run( function( editableOptions ){
        editableOptions.theme = 'bs3';
      });

      $scope.user = {
        date: 'detail.date',
        category: 'detail.category',
        address: 'detail.address',
        tenant: 'detail.tenant',
        phone: 'detail.phone',
        email: 'detail.email',
        description: 'detail.description',
        comments: 'detail.comments',
        status: 'detail.status'
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
