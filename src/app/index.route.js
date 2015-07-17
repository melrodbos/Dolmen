(function() {
  'use strict';
//angular is my dictionary or an object
//.module is a key that belongs to the dictionary
//module('dolmen') is a function,
//.directive is a method that is assigned a 'string' and a variable
//function and var is how I define identifiers
//variable and function hoisting = the way the computer scans the doc and grabs the identifiers first.


//functions can accept inputo and provide output (w a return statement). If I don't
//get a return out of a function the output is undefined. the implicit return value of
// fn is undefined.
// A function can also have side-effects.
//a fn that belongs to an object is called a method.


  angular
  .module('dolmen')
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
      templateUrl: 'app/po_login/po_login.html',
      controller: 'PoLoginController',
      controllerAs: 'PoLogin',
      data: {
        needsAuth: false
      }
    })
    //Don't need auth to go to this route:
    .state('t_login', {
      url: '/t_login',
      templateUrl: 'app/t_login/t_login.html',
      // controller: 'TLoginController',
      // controllerAs: 'tLogin',
      data: {
        needsAuth: false
      }
    })

    .state('po_dash', {
      url: '/po_dash',
      templateUrl: 'app/po_dash/po_dash.html',
      //Since I need authorization to go to this route, it needs to evaluate to true.
      data: {
        needsAuth: true
      }
    })

    .state('t_dash', {
      url: '/t_dash',
      templateUrl: 'app/t_dash/t_dash.html',
      //Totally need authorization to get here...
      data: {
        needsAuth: true
      }
    });
}//End of routeConfig

})();
