(function(){
  'use strict';
  var app = angular.module( 'dolmen.requestForm',[ 'dolmen.services', 'ngStorage' ] );
  app.controller( 'RequestController', [
    '$scope',
    'Maintenance',
    '$sessionStorage',
    function( $scope, Maintenance, $sessionStorage ){
      var self = this;
      self.submit = function() {
        Maintenance.addRequest({
          date: self.date,
          dateComplete: 'tbd',
          category: self.category,
          address: self.address,
          phone: self.phone,
          description: self.description,
          instructions: self.instructions,
          status: self.status,
          oid: $sessionStorage.ownerSession.google.id
        });
      //   .then( function() {
      //       // document.getElementById( 'submit_mr' ).addEventListener(
      //       $state.go( 'dashboard' );
      //       // });
       //
      //     });
      //     // the following will clear the fields once the request is su
      //     self.date = '';
      //     self.category = '';
      //     self.address = '';
      //     self.phone = '';
      //     self.description = '';
      //     self.instructions = '';
      //     self.status = '';
      //  };
    };
  }]);
})();
