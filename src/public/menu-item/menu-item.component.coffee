(->

  'use strict'

  angular.module 'public'
  .component 'menuItem', {
    templateUrl: 'public/menu-item/menu-item.html',
    bindings: {
      menuItem: '<'
    },
    controller: MenuItemController
  }

  MenuItemController = (ApiPath) ->
    $ctrl = @
    $ctrl.basePath = ApiPath
    return
  return

  MenuItemController.$inject = ['ApiPath']
)()
