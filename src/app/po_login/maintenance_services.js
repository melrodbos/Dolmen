// Factory to add, remove, edit and delete maintenence requests:
( function(){
  'use strict';

  angular.module( 'dolmen.services', [ 'firebase' ] )
  .service( 'Maintenance', [
    '$rootScope',
    'FBDolmen',
    '$firebaseArray',
    '$firebaseObject',
    function( $rootScope, FBDolmen, $firebaseArray, $firebaseObject ) {
    var maintObj = { };
    var ref = new Firebase( FBDolmen + '/requests' );
    maintObj.getRequests = function( oid ){
      ref.orderByChild( 'oid' ).equalTo( oid ).on( 'value', function( res ){
        var reqList = res.val();
        maintObj.requests = reqList;
        $rootScope.$broadcast( 'requestsRetrieved' );
      });
    };
    maintObj.addRequest = function( request ){
      // from firebase docs:
      var list = $firebaseArray(ref);
      list.$add( request ).then(function(ref) {
        var id = ref.key();
        list.$indexFor(id); // returns location in the array
      });
    };
    maintObj.updateRequest = function( request ){
      var reqRef = new Firebase( FBDolmen + '/requests/' +  request.dbId );
      var req = $firebaseObject( reqRef );
      req.date = request.date;
      req.address = request.address;
      req.status = request.status;
      req.description = request.description;
      req.tenant = request.tenant;
      req.phone = request.phone;
      return req.$save();
    };
    return maintObj;
  }]);

  })();
