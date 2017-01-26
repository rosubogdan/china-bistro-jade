(function() {
  'use strict';
  var UserService;
  UserService = function($localStorage) {
    var self;
    self = this;
    self.saveUser = function(userData) {
      $localStorage.user = userData;
    };
    self.getUserInfo = function() {
      return $localStorage.user || null;
    };
  };
  return;
  UserService.$inject = ['$localStorage'];
  return angular.module('common').service('UserService', UserService);
})();
