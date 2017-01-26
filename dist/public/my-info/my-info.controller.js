(function() {
  'use strict';
  var MyInfoController;
  angular.module('public').controller('MyInfoController', MyInfoController);
  MyInfoController.$inject = ['user'];
  MyInfoController = function(user) {
    var self;
    self = this;
    self.user = user;
  };
})();
