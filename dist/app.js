(function() {
  'use strict';
  var config;
  config = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  };
  config.$inject = ['$urlRouterProvider'];
  return angular.module('chinaBistroApp', ['public']).config(config);
})();
