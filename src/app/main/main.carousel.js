(function() {
 'use strict';

 angular.module('dolmen').controller('MainController', function ($scope) {
   $scope.myInterval = 3000;
   var slides = $scope.slides = [];
   $scope.addSlide = function() {
     var newWidth = 600 + slides.length + 1;
     slides.push({
       image: 'https://placeimg.com/1140/500/tech' + newWidth + '/300',
      //  text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
      //    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
     });
   };
   for (var i=0; i<4; i++) {
     $scope.addSlide();
   }
 });
})();
