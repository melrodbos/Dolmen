(function(){
  'use strict';

  angular.module('dolmen.pendingDetail', [])

  .run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
  })

  .controller('PendingController', function( Maintenance, $stateParams, $timeout ) {

    var me = this;
    var obj = Maintenance.getRequest( $stateParams.id );
    obj.$loaded().then( function(){
      $timeout( function(){
        console.log( obj );
        me.requests = obj;
      });
    });

    me.updateRequest = function( e ){
      e.preventDefault();
      me.requests.id = $stateParams.id;
      me.requests.status = jQuery( '#status_select' ).val();
      Maintenance.updateRequest( me.requests );
    };
  });
})();
