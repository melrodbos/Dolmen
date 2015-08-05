(function(){
  'use strict';

  var app = angular.module( 'dolmen' );
  app.controller( 'MainController', function( FBDolmen, $firebaseArray, $firebaseObject, Auth ){

    var self = this;
    var ownerInfo = new Firebase( FBDolmen + '/owners' );

    this.obj = $firebaseArray( ownerInfo );
    console.log( this.obj );

    this.ownerArray = {};

    this.googleLogin = Auth.googleLogin;

    Auth.onAuth( function( owner ){
      self.owner = owner;
      if ( owner === null ){
        console.log( 'null' );
      } else {
        console.log( 'owner' );
      }
    });
  });
})();//End of IIFE



//----------------------------------------------
// //NOTE: Gulp_angular Default MainController:

// (function() {
//   'use strict';
//
//   angular
//   .module('dolmen')
//     .controller('MainController', MainController);
//
//   /** @ngInject */
//   function MainController($timeout, webDevTec, toastr) {
//     var vm = this;
//
//     vm.awesomeThings = [];
//     vm.classAnimation = '';
//     vm.creationDate = 1436460613764;
//     vm.showToastr = showToastr;
//
//     activate();
//
//     function activate() {
//       getWebDevTec();
//       $timeout(function() {
//         vm.classAnimation = 'rubberBand';
//       }, 4000);
//     }
//
//     function showToastr() {
//       toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
//       vm.classAnimation = '';
//     }
//
//     function getWebDevTec() {
//       vm.awesomeThings = webDevTec.getTec();
//
//       angular.forEach(vm.awesomeThings, function(awesomeThing) {
//         awesomeThing.rank = Math.random();
//       });
//     }
//   }
// })();
