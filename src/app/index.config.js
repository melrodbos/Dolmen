;(function() {
  'use strict';

  var app = angular
    .module('dolmen')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      controller: 'PoLogin',
      templateUrl: 'app/main/main.html',
      resolve: {
        'currentAuth': ['Auth', function(Auth){
          return Auth.$waitForAuth();
        }]
      }
    })
    .when('/dashboard', {
      controller: 'PoLogin',
      templateUrl: 'app/main/main.html',
      resolve: {
        'currentAuth': ['Auth', function(Auth){
          return Auth.$requireAuth(.);
        }]
      }
    });
  }]);
})();
