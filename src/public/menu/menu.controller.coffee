(->

  'use strict'

  MenuController = (menuCategories) ->
    $ctrl = @
    $ctrl.menuCategories = menuCategories
    return
  return

  MenuController.$inject = ['menuCategories']
  
  angular.module 'public'
  .controller 'MenuController', MenuController

)()
