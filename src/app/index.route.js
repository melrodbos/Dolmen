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
   'dolmen.scroll',
  ])
  .config( function ( $stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
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
