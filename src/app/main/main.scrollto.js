// (function(){
//   'use strict';
//
//   angular.module('dolmen');
//
//   controller('Scroll', function($scope) {
//     $scope.items = [];
//     for (var i=0; i<100; i++) { $scope.items.push(i); }
//   });
//
//   app.directive('scrollOnClick', function() {
//     return {
//       restrict: 'A',
//       link: function(scope, $elm) {
//         $elm.on('click', function() {
//           $("body").animate({scrollTop: $elm.offset().top}, "slow");
//         });
//       }
//     };
//   });
//
// });








// (function(){
//   'use strict';
// $(document).ready(function(){
//   //Scroll to
//     $('a[href*=#]').bind('click', function(event){
//       event.preventDefault();
//     var $href = $(this).attr('href')
//     $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1200, 'easeInOutExpo');
//   });
// });
// });
