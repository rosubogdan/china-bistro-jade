(->

  'use strict'

  MenuItemsController = (menuItems) ->
    $ctrl = @
    $ctrl.menuItems = menuItems
    return
  return

  MenuItemsController.$inject = ['menuItems']

  angular.module 'public'
  .controller 'MenuItemsController', MenuItemsController
)()
