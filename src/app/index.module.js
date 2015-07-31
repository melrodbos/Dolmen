(function() {
  'use strict';

  angular
    .module('dolmen', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'restangular',
      'ui.router',
      'ui.bootstrap',
      'firebase',
      'xeditable'
      //'dolmen.services',
      //'dolmen.login',
    ]
  ).constant( 'FIREBASE_APP', 'https://dolmen.firebase.io.com/users' );
})();
