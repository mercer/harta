'use strict';

/**
 * @ngdoc function
 * @name hartaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hartaApp
 */
angular.module('hartaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
