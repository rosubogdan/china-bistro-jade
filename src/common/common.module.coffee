(->

  'use strict'

  config = ($httpProvider) ->
    $httpProvider.interceptors.push 'loadingHttpInterceptor'

  config.$inject = ['$httpProvider']

  angular.module 'common', ['ngStorage']
  .constant 'ApiPath', 'https://rosubogdan-course5.herokuapp.com'
  .config config
)()
