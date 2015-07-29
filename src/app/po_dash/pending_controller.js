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
        Comments: 'detail.comments'
      };
  });
})();
