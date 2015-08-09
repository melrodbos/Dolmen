(function(){
  'use strict';

  angular.module( 'dolmen.dashboard', [ 'dolmen.services', 'ngStorage' ] )
  .controller( 'DashboardController', [ '$rootScope', '$scope', 'Maintenance', '$sessionStorage', '$timeout',
  function( $rootScope, $scope, Maintenance, $sessionStorage, $timeout ){
    var self = this;
    self.requests = [];
    Maintenance.getRequests( $sessionStorage.ownerSession.google.id );
    $rootScope.$on( 'requestsRetrieved', function(){
      $timeout( function(){
        self.requests = Maintenance.requests;
        self.requests = $.map( self.requests, function( value, index ) {
            value.dbId = index;
            return [value];
        });
      });
    });
    $scope.filterActive = function( req ){ return req.status === 'Pending'; };
    $scope.filterPending = function( req ){ return req.status === 'Active'; };
    $scope.filterCompleted = function( req ){ return req.status === 'Completed'; };
  }]);

})();
