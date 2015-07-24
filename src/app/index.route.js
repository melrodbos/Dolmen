
(function() {
  'use strict';

 angular.module('dolmen')
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })

    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'PoLoginController',
      controllerAs: 'PoLogin',
    })

    .state('features', {
      url: '/features',
      templateUrl: 'app/features/features.html',
    })

    .state('po_login', {
      url: '/login',
      templateUrl: 'app/main/main.html',
      controller: 'PoLoginController',
      controllerAs: 'PoLogin',
    })

    .state('po_dash', {
      url: '/dashboard',
      templateUrl: 'app/po_dash/po_dash.html',
      //Since I need authorization to go to this route, it needs to evaluate to true.
      controller: 'ShowController',
      controllerAs: 'showM',
    })

    .state('po_form', {
      url: '/requests',
      templateUrl: 'app/po_dash/po_form.html',
      controller: 'RequestController',
      controllerAs: 'request'
    });

}//End of routeConfig

})();
