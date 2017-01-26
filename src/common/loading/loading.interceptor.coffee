(->

  'use strict'

  LoadingHttpInterceptor = ($rootScope, $q) ->
    loadingCount = 0
    loadingEventName = 'spinner:activate'

    {
      request: (config) ->
        $rootScope.$broadcast loadingEventName, {on:true} if ++loadingCount == 1
        config

      response: (response) ->
        $rootScope.$broadcast loadingEventName,{on:false} if --loadingCount == 0
        response

      responseError: (response) ->
        $rootScope.$broadcast loadingEventName,{on:false} if --loadingCount == 0
        $q.reject(response)
    }

  LoadingHttpInterceptor.$inject = ['$rootScope', '$q']

  angular.module 'common'
  .factory 'loadingHttpInterceptor',LoadingHttpInterceptor
)()
