
;( function() {
  'use strict';
    var app = angular.module( 'dolmen' );

      app.controller( 'RequestController', function( FBDolmen,  $firebaseArray, $location ) {

        var self = this;

        var firebase = new Firebase( FBDolmen + '/owners' + '.json' );
        var authData = firebase.getAuth();
        var list = firebase.child( authData.uid + '/pending' );

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
            // document.getElementById( 'submit_mr' ).addEventListener( 'click', function(){
            $location.path( '/dashboard' );
            // });

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
