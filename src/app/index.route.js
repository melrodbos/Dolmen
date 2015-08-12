(function() {
  'use strict';

 angular.module('dolmen', [
   'ui.router',
   'firebase',
   'ui.bootstrap',
   'xeditable',
   'ngStorage',
   'dolmen.services',
   'dolmen.dashboard',
   'dolmen.requestForm',
   'dolmen.pendingDetail',
  //  'dolmen.pF',
   'dolmen.scroll'
  ])
  .config( function ( $stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/main');
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        data: {
          needsAuth: false
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/po_dash/po_dash.html',
        data: {
          needsAuth: true
        }
      })
      .state( 'active', {
        url: '/active',
        templateUrl: 'app/po_dash/po_active_details.html',
        parent: '/dashboard',
        data: {
          needsAuth: true
        }
      })
      .state( 'pending', {
        url: '/pending',
        templateUrl: 'app/po_dash/pending_requests.html',
        controller: 'PendingController',
        controllerAs: 'pending',
        data: {
          needsAuth: true
        }
      })
      .state( 'completed', {
        url: '/completed',
        templateUrl: 'app/po_dash/completed.html',
        data: {
          needsAuth: true
        }
      })
      .state('po_form', {
        url: '/requests',
        templateUrl: 'app/po_dash/po_form.html',
        data: {
          needsAuth: true
        }
      });
    }); //End of routeConfig
})(); //End of IIFE
