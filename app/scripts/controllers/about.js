'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the studentProfileApp
 */
angular.module('studentProfileApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.getClass = function() {
      return 'about-us';
    };
  });
