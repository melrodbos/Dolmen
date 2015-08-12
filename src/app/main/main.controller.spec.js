(function() {
  'use strict';

  describe( 'controllers', function(){

    var scope;

    beforeEach( module( 'dolmen' ));

    beforeEach(inject( function( $rootScope ){
      scope = $rootScope.$rootScope.$new();
    }));

    it('should define more than 5 awesome things', inject( function( $controller ) {
      expect( scope.awesomeThings ).toBeUndefined();

      $controller( 'MainController', {
        $scope: scope
      });

      expect( angular.isArray(scope.awesomeThings )).toBeTruthy();
      expect( scope.awesomeThings.length > 5 ).toBeTruthy();
    }));
  });
})();
