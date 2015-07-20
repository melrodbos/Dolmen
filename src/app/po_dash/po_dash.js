/* global angular */
;(function(){
  'use strict';
    var app = angular.module('dolmen');

      app.controller('RequestController', function($firebaseArray) {

        var self = this;

        var firebase = new Firebase('https://dolmen.firebaseio.com');

        self.data = $firebaseArray(firebase);
        console.log(self.data);

        self.submit = function() {
          self.data.$add({
            category: self.category,
            address: self.address,
            phone: self.phone,
            description: self.description,
            instructions: self.instructions
          });
          // the following will clear the fields once the request is submited:
          self.category = '';
          self.address = '';
          self.phone = '';
          self.description = '';
          self.instructions = '';
        };

      });

})();
