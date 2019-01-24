'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the studentProfileApp
 */
angular.module('studentProfileApp')
  .controller('RegisterCtrl', ['$scope', '$rootScope', '$window', 'Student', '$cookies', function ($scope, $rootScope, $window, Student, $cookies) {
    var register = this;
    
    register.signUp = function() {
      // Save registration
      $rootScope.student = new Student(register.username, register.fullName, register.email, register.password, '');
      
      // Find tomorrow's date.
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
  
      // Set session for user | I use cookies for this one as sample
      $cookies.put('username', register.username, {'expires': expireDate});
      $cookies.put('fullName', register.fullName, {'expires': expireDate});
      $cookies.put('email', register.email, {'expires': expireDate});
      $cookies.put('password', register.password, {'expires': expireDate});
      
      // redirect to profile page
      $window.location.href = '/#!/profile';
    };
    
    $scope.getClass = function() {
      return 'register';
    };
  }]);