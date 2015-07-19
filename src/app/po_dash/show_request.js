/* global angular */

;(function(){
  'use strict';
    var app = angular.module('dolmen');

      app.controller('ShowController', function($http) {

        var show = this;
        this.request = { };

        this.addRequest = function(info) {
          info.requests.push(this.request);
          this.request = { };
        };

        $http.get('https://dolmen.firebaseio.com/')
        .then(function(response){
          console.log(response);
          show.requests = data;

        });

      });


    })();
