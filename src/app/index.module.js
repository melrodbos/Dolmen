(function() {
  'use strict';

  angular
    .module('dolmen', [
      //'ngAnimate',
      'jquery',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'restangular',
      'ui.router',
      'ui.bootstrap',
      'dolmen.services',
      'dolmen.login'
    ]
  );

})();
