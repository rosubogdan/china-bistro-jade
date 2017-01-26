(function() {
  'use strict';
  var MenuItemController;
  angular.module('public').component('menuItem', {
    templateUrl: 'public/menu-item/menu-item.html',
    bindings: {
      menuItem: '<'
    },
    controller: MenuItemController
  });
  MenuItemController = function(ApiPath) {
    var $ctrl;
    $ctrl = this;
    $ctrl.basePath = ApiPath;
  };
  return;
  return MenuItemController.$inject = ['ApiPath'];
})();
