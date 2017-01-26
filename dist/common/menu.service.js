(function() {
  'use strict';
  var MenuService;
  MenuService = function($http, ApiPath) {
    var self;
    self = this;
    self.getCateogries = function() {
      return $http.get(ApiPath + '/categories.json').then(function(res) {
        return res.data;
      });
    };
    self.getMenuItems = function(category) {
      var config;
      config = {};
      if (category) {
        config.params = {
          'category': category
        };
      }
      return $http.get(ApiPath + '/menu_items.json', config).then(function(res) {
        return res.data;
      });
    };
    self.getFavoriteDish = function(short_name) {
      return $http.get(ApiPath + '/menu_items/' + short_name.toUpperCase() + '.json').then(function(res) {
        return res.data;
      });
    };
  };
  return;
  MenuService.$inject = ['$http', 'ApiPath'];
  return angular.module('common').service('MenuService', MenuService);
})();
