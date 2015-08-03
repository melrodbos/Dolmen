
(function() {
  'use strict';

 angular.module('dolmen')
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    // .state('home', {
    //   url: '/',
    //   templateUrl: 'app/main/main.html',
    //   // controller: 'MainController',
    //   // controllerAs: 'MainCtrl'
    // })

    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      // controller: 'LoginController',
      // controllerAs: 'LoginCtrl',
    })

    .state('features', {
      url: '/features',
      templateUrl: 'app/features/features.html',
    })

    .state('pending_requests', {
      url: '/pending',
      templateUrl: 'app/po_dash/pending_requests.html',
      controller: 'PendingController',
      controllerAs: 'pending',
    })

    .state('po_dash', {
      url: '/dashboard',
      templateUrl: 'app/po_dash/po_dash.html',
      // controller: 'DashboardController'
      // controllerAs: 'DashCtrl',
    })

    .state('po_form', {
      url: '/requests',
      templateUrl: 'app/po_dash/po_form.html',
      // controller: 'RequestController',
      // controllerAs: 'request',
    })

    .state('po_active', {
      url: '/active',
      templateUrl: 'app/po_dash/po_active_details.html',
    })

    .state('properties', {
      url: '/properties',
      templateUrl: 'app/po_dash/po_properties.html'
    });

}//End of routeConfig

})();
