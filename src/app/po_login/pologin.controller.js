/* global angular Firebase */
(function() {
  'use strict';
  var app = angular.module('dolmen');
    app.controller('PoLoginController', function() {
      var ref = new Firebase('https://dolmen.firebaseio.com');
      var self = this;
      self.login = function() {
        ref.authWithOAuthRedirect('google', function(error) {
          if (error) {
            // console.log("Awesomeness!!!", error);
          } else {
            //Totally not getting here EVAH'
          }
        });
      };
    }); //End of PoLoginController
})(); //end of IIFE
