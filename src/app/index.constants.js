/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('dolmen')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant( 'FBDolmen', 'https://dolmen.firebaseio.com' );

})();
