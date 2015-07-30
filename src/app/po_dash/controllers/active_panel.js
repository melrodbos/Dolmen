(function (){
  'use strict';

  var app = angular.module( 'dolmen' );
  app.controller( 'ActiveController', function ( $http, $scope ){

    var give = this;
    this.texto = { };

    this.addText = function ( activeReq ) {
      activeReq.texts.push( this.texto );
      this.texto = { };
    };
    $http.get( 'https://dolmen.firebaseio.com/' + '.json' )
    .then( function( respuesta ){
      console.log(respuesta.data);
      give.texts = respuesta.data;
    });
  });

})();
