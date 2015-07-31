
;( function() {
  'use strict';
    var app = angular.module( 'dolmen' );

      app.controller( 'RequestController', function( $firebaseArray, $location ) {

        var self = this;

        var firebase = new Firebase( 'https://dolmen.firebaseio.com/dasboard' );

        self.data = $firebaseArray( firebase );
        console.log( self.data );

        self.submit = function() {
          self.data.$add({
            date: self.date,
            category: self.category,
            address: self.address,
            phone: self.phone,
            description: self.description,
            instructions: self.instructions,
            status: self.status

          }).then( function() {
            $location.path( '/dashboard' );
          });
          // the following will clear the fields once the request is submited:
          self.date = '';
          self.category = '';
          self.address = '';
          self.phone = '';
          self.description = '';
          self.instructions = '';
          self.status = '';
        };

      });

})();
