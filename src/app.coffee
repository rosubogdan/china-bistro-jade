(->
  'use strict'

  config = ($urlRouterProvider) ->
    $urlRouterProvider.otherwise('/')
    return

  config.$inject = ['$urlRouterProvider']

  angular.module 'chinaBistroApp', ['public']
  .config config

)()
