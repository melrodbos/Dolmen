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

      .state('features', {
        url: '/features',
        templateUrl: 'app/features/features.html'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html'
      })

      .state('po_login', {
        url: '/po_login',
        templateUrl: 'app/po_login/po_login.html'
      })

      .state('t_login', {
        url: '/t_login',
        templateUrl: 'app/t_login/t_login.html'
      })

      .state('po_dash', {
        url: '/po_dash',
        templateUrl: 'app/po_dash/po_dash.html'
      })

      .state('t_dash', {
        url: '/t_dash',
        templateUrl: 'app/t_dash/t_dash.html'
      });

  }
]);

})();
