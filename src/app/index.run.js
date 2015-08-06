;( function() {
  'use strict';


  var app = angular.module( 'dolmen' )
    .run(runBlock);

  /** @ngInject */
  function runBlock( $log ) {

    $log.debug( 'runBlock end' );
  }
//add .run scripts here:
app.run(['$rootScope', '$sessionStorage', '$state', function( $rootScope, $sessionStorage, $state )
{
  $rootScope.$on( '$stateChangeStart', function( events, to ) {
    if( to.data.needsAuth )
    {
      
    }
    // if ( to.data.needsAuth && $sessionStorage.ownerSession ) {
    //   var movingOn = true;
    // } else {
    //   $state.go( 'home' );
    // }
  });
}]);


})();
