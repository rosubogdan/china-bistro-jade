(function() {
  'use strict';
  var MenuController;
  MenuController = function(menuCategories) {
    var $ctrl;
    $ctrl = this;
    $ctrl.menuCategories = menuCategories;
  };
  return;
  MenuController.$inject = ['menuCategories'];
  return angular.module('public').controller('MenuController', MenuController);
})();
