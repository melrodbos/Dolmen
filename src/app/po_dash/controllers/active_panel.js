(function (){
  'use strict';

  var app = angular.module( 'dolmen' );
  app.controller( 'ActiveController', function ( FBDolmen, $http ){

    var active = this;
    active.texto = [ ];

    this.addTexto = function ( activeReq ) {
      activeReq.texts.push( this.texto );
      this.texto = { };
    };
    $http.get( FBDolmen + '/owners' + '/requests' + '.json' )
    .then( function( respuesta ){
      active.texts = respuesta.data;
      console.log(respuesta.data);
    });
  });

})();
