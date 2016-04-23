'use strict';

angular.module('fishackatonApp', [
  'fishackatonApp.auth',
  'fishackatonApp.admin',
  'fishackatonApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'uiGmapgoogle-maps'
])
  .config(function($urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  });
