(function() {
  'use strict';

  angular
  .module('dolmen')
    .config([
      '$urlRouterProvider',
      '$stateProvider',

  /** @ngInject */
  function routeConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
      })

      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html'
      })

      .state('po_dash', {
        url: '/po_dash',
        templateUrl: 'app/po_dash/po_dash.html'
      });

  }
]);

})();
