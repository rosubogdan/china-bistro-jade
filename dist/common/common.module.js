(function() {
  'use strict';
  var config;
  config = function($httpProvider) {
    return $httpProvider.interceptors.push('loadingHttpInterceptor');
  };
  config.$inject = ['$httpProvider'];
  return angular.module('common', ['ngStorage']).constant('ApiPath', 'https://rosubogdan-course5.herokuapp.com').config(config);
})();
