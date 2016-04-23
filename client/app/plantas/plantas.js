'use strict';

angular.module('fishackatonApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('plantas', {
        url: '/plantas',
        template: '<plantas></plantas>'
      });
  });
