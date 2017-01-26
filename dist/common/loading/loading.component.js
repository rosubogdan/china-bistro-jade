(function() {
  'use strict';
  var LoadingController;
  LoadingController = function($rootScope) {
    var $ctrl, listener, onSpinnerActivate;
    $ctrl = this;
    listener = null;
    $ctrl.$onInit = function() {
      $ctrl.show = false;
      listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
    };
    $ctrl.$onDestroy = function() {
      listener();
    };
    onSpinnerActivate = function(event, data) {
      $ctrl.show = data.on;
    };
  };
  LoadingController.$inject = ['$rootScope'];
  return angular.module('common').component('loading', {
    template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
    controller: LoadingController
  });
})();
