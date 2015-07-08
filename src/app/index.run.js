(function() {
  'use strict';

  angular
    .module('theNextGenerator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
