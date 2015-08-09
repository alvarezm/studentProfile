'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.controller:StudentImageCtrl
 * @description
 * # StudentImageCtrl
 * Controller of the studentProfileApp
 */
angular.module('studentProfileApp')
  .controller('StudentImageCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log($rootScope.student);
    $scope.getClass = function() {
      return 'student-photo';
    };
  }]);