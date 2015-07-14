(function() {
 'use strict';

 angular.module('dolmen').controller('MainController', function ($scope) {
   $scope.myInterval = 3000;
   var slides = $scope.slides = [];
   $scope.addSlide = function() {
     var newWidth = 600 + slides.length + 1;
     slides.push({
       image: 'http://placekitten.com/' + newWidth + '/300',
       text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
     });
   };
   for (var i=0; i<4; i++) {
     $scope.addSlide();
   }
 });
})();





//
//
//   var dolmen = angular.module('dolmen', [];
//    /** @ngInject */
//   function CarouselController($scope) {
//     dolmen.controller('CarouselController', function($scope){
//       $scope.myInterval = 5000;
//       $cope.slides = [
//         {
//           'https://placeimg.com/640/480/nature'
//         },
//         {
//           'https://placeimg.com/640/480/arch'
//         },
//         {
//           'https://placeimg.com/640/480/nature'
//         }
//       ];
//     });
//   }
//
// )
