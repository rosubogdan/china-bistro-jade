(->

  'use strict'

  angular.module 'public'
  .controller 'MyInfoController', MyInfoController

  MyInfoController.$inject = ['user']

  MyInfoController = (user) ->
    self = @
    self.user = user
    return
  return

)()
