(->

  'use strict'

  UserService = ($localStorage) ->
    self = @

    self.saveUser = (userData) ->
      $localStorage.user = userData
      return

    self.getUserInfo = () ->
      $localStorage.user or null
    return
  return


  UserService.$inject = ['$localStorage']

  angular.module 'common'
  .service 'UserService', UserService

)()
