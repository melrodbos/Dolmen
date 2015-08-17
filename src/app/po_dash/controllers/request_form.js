(function() {
  'use strict';

  angular.module('dolmen.requestForm', ['dolmen.services', 'ngStorage'])
    .controller('RequestController', ['$scope', 'Maintenance',
      '$sessionStorage', '$state',
      function($scope, Maintenance, $sessionStorage, $state) {
        var self = this;
        self.submit = function() {
          Maintenance.addRequest({
            date: jQuery( '#theDate' ).val(),
            // dateComplete: 'tbd',
            tenant: self.tenant,
            category: self.category,
            address: self.address,
            phone: self.phone,
            description: self.description,
            instructions: self.instructions,
            status: self.status,
            email: self.email,
            comments: self.comments,
            oid: $sessionStorage.ownerSession.google.id
          });

          $state.go('dashboard');

          self.date = '';
          self.tenant = '';
          self.category = '';
          self.address = '';
          self.phone = '';
          self.description = '';
          self.instructions = '';
          self.status = '';
          self.email = '';
          // self.comments = '';
        };

        //date picker:
        $scope.today = function() {
          $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
          $scope.dt = null;
        };
        //
        // // Disable weekend selection
        // $scope.disabled = function(date, mode) {
        //   return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        // };
        //
        // $scope.toggleMin = function() {
        //   $scope.minDate = $scope.minDate ? null : new Date();
        // };
        // $scope.toggleMin();
        //
        // $scope.open = function($event) {
        //   $scope.status.opened = true;
        // };
        //
        // $scope.dateOptions = {
        //   formatYear: 'yy',
        //   startingDay: 1
        // };
        //
        // $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        // $scope.format = $scope.formats[0];
        //
        // $scope.status = {
        //   opened: false
        // };
        //
        // var tomorrow = new Date();
        // tomorrow.setDate(tomorrow.getDate() + 1);
        // var afterTomorrow = new Date();
        // afterTomorrow.setDate(tomorrow.getDate() + 2);
        // $scope.events = [{
        //   date: tomorrow,
        //   status: 'full'
        // }, {
        //   date: afterTomorrow,
        //   status: 'partially'
        // }];
        //
        // $scope.getDayClass = function(date, mode) {
        //   if (mode === 'day') {
        //     var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
        //
        //     for (var i = 0; i < $scope.events.length; i++) {
        //       var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);
        //
        //       if (dayToCheck === currentDay) {
        //         return $scope.events[i].status;
        //       }
        //     }
        //   }
        //
        //   return '';
        // };

      }
    ]);
})();
