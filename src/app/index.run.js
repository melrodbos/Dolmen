(function() {
  'use strict';

  angular
    .module('dolmen')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
//add .run
})();
