(function() {
  'use strict';
  var MenuItemsController;
  MenuItemsController = function(menuItems) {
    var $ctrl;
    $ctrl = this;
    $ctrl.menuItems = menuItems;
  };
  return;
  MenuItemsController.$inject = ['menuItems'];
  return angular.module('public').controller('MenuItemsController', MenuItemsController);
})();
