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
      'xeditable',
      // 'dolmen.services',
    ]
    //
  ).constant( 'FBDolmen', 'https://dolmen.firebaseio.com/owners');
})();
