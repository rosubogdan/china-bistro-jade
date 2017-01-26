(->

  'use strict'

  LoadingController = ($rootScope) ->
    $ctrl = @
    listener = null

    $ctrl.$onInit = () ->
      $ctrl.show = false
      listener = $rootScope.$on 'spinner:activate', onSpinnerActivate
      return

    $ctrl.$onDestroy = () ->
      listener()
      return

    onSpinnerActivate = (event, data) ->
      $ctrl.show = data.on
      return
    return

  LoadingController.$inject = ['$rootScope']

  angular.module 'common'
  .component 'loading', {
    template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
    controller: LoadingController
  }
)()
