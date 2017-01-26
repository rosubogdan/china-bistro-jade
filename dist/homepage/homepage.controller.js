(function() {
  'use strict';
  var HomepageController;
  HomepageController = function() {
    var message, self;
    self = this;
    message = 'homepage controller';
    return console.log('message ', message);
  };
  return angular.module('chinaBistroApp').controller('HomepageController', HomepageController);
})();
