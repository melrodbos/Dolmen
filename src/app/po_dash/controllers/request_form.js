(function() {
  'use strict';

  angular.module('dolmen.requestForm', ['dolmen.services', 'ngStorage'])
    .controller('RequestController', ['$scope', 'Maintenance',
      '$sessionStorage', '$state',
      function($scope, Maintenance, $sessionStorage, $state) {
        var self = this;
        self.submit = function() {
          Maintenance.addRequest({
            date: self.date,
            // dateComplete: 'tbd',
            category: self.category,
            address: self.address,
            phone: self.phone,
            description: self.description,
            instructions: self.instructions,
            status: self.status,
            oid: $sessionStorage.ownerSession.google.id
          });

          $state.go('dashboard');

          self.date = '';
          self.category = '';
          self.address = '';
          self.phone = '';
          self.description = '';
          self.instructions = '';
          self.status = '';
        };
    }]);
})();
