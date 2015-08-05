(function() {
  'use strict';

 angular.module('dolmen', [
   'ui.router',
   'firebase',
   'ui.bootstrap',
   'xeditable' ])
  .config( function ( $stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'MainCtrl'
      })

      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/po_dash/po_dash.html'
        // controller: 'DashboardController',
        // controllerAs: 'dashboard'
      })

      .state('pending', {
        url: '/pending',
        templateUrl: 'app/po_dash/pending_requests.html',
        controller: 'PendingController',
        controllerAs: 'pending'
      })

      .state('po_form', {
        url: '/requests',
        templateUrl: 'app/po_dash/po_form.html'
        // controller: 'RequestController',
        // controllerAs: 'request',
      })

      .state('po_active', {
        url: '/active',
        templateUrl: 'app/po_dash/po_active_details.html'
      })

      .state('properties', {
        url: '/properties',
        templateUrl: 'app/po_dash/po_properties.html'
      });

      $urlRouterProvider.otherwise('/');

}); //End of routeConfig
})(); //End of IIFE
