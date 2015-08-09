'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the studentProfileApp
 */
angular.module('studentProfileApp')
  .controller('RegisterCtrl', ['$scope', '$rootScope', '$window', 'Student', function ($scope, $rootScope, $window, Student) {
    var register = this;
    
    register.signUp = function() {
      // Save registration
      $rootScope.student = new Student(register.username, register.fullName, register.email, register.password, '');
      $window.location.href = '#/profile';
    };
    
    $scope.getClass = function() {
      return 'register';
    };
  }]);