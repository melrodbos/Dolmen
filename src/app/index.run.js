(function() {
  'use strict';


  var app = angular.module('dolmen')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
//add .run scripts here:
app.run(['$rootScope', '$location', function($rootScope, $location)
{
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
    if (error === "AUTH_REQUIRED") {
      $location.path("/");
    }
  });
}]);


})();
