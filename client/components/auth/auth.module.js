'use strict';

angular.module('fishackatonApp.auth', [
  'fishackatonApp.constants',
  'fishackatonApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
