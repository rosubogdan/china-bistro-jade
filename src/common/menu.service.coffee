(->

  'use strict'

  MenuService = ($http, ApiPath) ->
    self = @

    self.getCateogries = () ->
      $http.get( ApiPath + '/categories.json').then((res)->
        res.data)

    self.getMenuItems = (category) ->
      config = {}
      config.params = {'category': category} if category

      $http.get(ApiPath + '/menu_items.json', config).then((res) ->
        res.data)

    self.getFavoriteDish = (short_name) ->
      $http.get(ApiPath + '/menu_items/' + short_name.toUpperCase() + '.json')
      .then((res) ->
        res.data)
    return
  return

  MenuService.$inject = ['$http', 'ApiPath']

  angular.module 'common'
  .service 'MenuService', MenuService
    
)()
