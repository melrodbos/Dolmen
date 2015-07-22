(function() {
  'use strict';

 var app = angular.module('dolmen')
  .config(routeConfig);

  /** @ngInject */
  function routeConfig(
  $urlRouterProvider,
  $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
    })

    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html'
    })

    .state('features', {
      url: '/features',
      templateUrl: 'app/features/features.html'
    })

    .state('po_login', {
      url: '/login',
      templateUrl: 'app/po_login/po_login.html',
      controller: 'PoLoginController',
      controllerAs: 'PoLogin',
      data: {
        needsAuth: false
      }
    })

    .state('po_dash', {
      url: '/dashboard',
      templateUrl: 'app/po_dash/po_dash.html',
      //Since I need authorization to go to this route, it needs to evaluate to true.
      controller: 'ShowController',
      controllerAs: 'showM',
      data: {
        needsAuth: true
      }
    });
}//End of routeConfig

})();
