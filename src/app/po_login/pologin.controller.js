(function() {
  'use strict';

  angular
  .module('dolmen')
  .controller('PoLoginController', PoLoginController);

  function PoLoginController( $scope, $firebaseAuth ) {
    var ref = new Firebase('https://dolmen.firebaseio.com/');
    $scope.email = $firebaseAuth(ref);

    $scope.email = functio


  }

})();
