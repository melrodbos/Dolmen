// Factory to add, remove, edit and delete maintenence requests:
( function(){
  'use strict';

  angular.module( 'dolmen.services', [ 'firebase' ] )
  .service( 'Maintenance', [ '$rootScope','FBDolmen','$firebaseArray',
    '$firebaseObject', '$sessionStorage', '$timeout', '$state',
    function( $rootScope, FBDolmen, $firebaseArray, $firebaseObject, $sessionStorage, $timeout, $state ) {

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
      var reqRef = new Firebase( FBDolmen + '/requests/' +  request.id );
      var req = $firebaseObject( reqRef );
      console.log(reqRef);
      req.date = request.date;
      req.address = request.address;
      req.status = jQuery( '#theCat' ).val();
      req.description = request.description;
      req.category = request.category;
      req.instructions = request.instructions;
      req.tenant = request.tenant;
      req.phone = request.phone;
      req.email = request.email;
      request.comments = request.comments;
      req.oid = request.oid;
        req.$save().then(function( ref ){
          ref.key() === req.$id;
          $timeout(function(){
            $state.go( 'dashboard' );
          });
        });
    };
    maintObj.getRequest = function( request ){
      var r = new Firebase( FBDolmen + '/requests/' + request );
      var obj = $firebaseObject( r );
      return obj;
    };
    return maintObj;

  }]);

  })();
