/* global angular Firebase */

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
            title: self.title,
            description: self.description,
            instructions: self.instructions
          });
          // the following will clear the fields once the request is submited:
          self.title = '';
          self.description = '';
          self.instructions = '';
        };

      });

})();
