(function() {
  'use strict';
  return angular.module('public').component('menuCategory', {
    templateUrl: 'public/menu-category/menu-category.html',
    bindings: {
      category: '<'
    }
  });
})();
