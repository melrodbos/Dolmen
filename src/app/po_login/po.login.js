(function() {
  'use strict';

  angular
  .module('dolmen')
  .controller('PoLoginController', PoLogin);

  function PoLogin($scope, $firebaseArray) {
    var ref = new Firebase("https://dolmen.firebaseio.com/");

    //download the data into a local object:
    $scope.data = $firebaseArray(ref);


  }

})();
