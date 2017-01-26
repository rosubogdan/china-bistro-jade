(function() {
  'use strict';
  var LoadingHttpInterceptor;
  LoadingHttpInterceptor = function($rootScope, $q) {
    var loadingCount, loadingEventName;
    loadingCount = 0;
    loadingEventName = 'spinner:activate';
    return {
      request: function(config) {
        if (++loadingCount === 1) {
          $rootScope.$broadcast(loadingEventName, {
            on: true
          });
        }
        return config;
      },
      response: function(response) {
        if (--loadingCount === 0) {
          $rootScope.$broadcast(loadingEventName, {
            on: false
          });
        }
        return response;
      },
      responseError: function(response) {
        if (--loadingCount === 0) {
          $rootScope.$broadcast(loadingEventName, {
            on: false
          });
        }
        return $q.reject(response);
      }
    };
  };
  LoadingHttpInterceptor.$inject = ['$rootScope', '$q'];
  return angular.module('common').factory('loadingHttpInterceptor', LoadingHttpInterceptor);
})();
