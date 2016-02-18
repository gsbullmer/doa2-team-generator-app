(function() {
  var app = angular.module('setup', []);

  app.controller('SetupController', function() {

  });

  app.directive('set', function() {
    return {
      'restrict': 'E',
      'templateUrl': './partials/set.html'
    };
  });

  app.directive('basic', function() {
    return {
      'restrict': 'E',
      'templateUrl': './partials/basic.html'
    };
  });

  app.directive('circle', function() {
    return {
      'restrict': 'E',
      'templateUrl': './partials/circle.html'
    };
  });

  app.directive('nature', function() {
    return {
      'restrict': 'E',
      'templateUrl': './partials/nature.html'
    };
  });

  app.directive('ageSetting', function() {
    return {
      'restrict': 'E',
      'templateUrl': './partials/age-setting.html'
    };
  });

})();
