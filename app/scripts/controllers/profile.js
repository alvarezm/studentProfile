'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studentProfileApp
 */
angular.module('studentProfileApp')
  .controller('ProfileCtrl', ['$scope', '$rootScope', 'Student', function ($scope, $rootScope, Student) {
    var profile = this;
    var student = $rootScope.student;
    profile.isEdit = false;
    //var student = new Student('murielle', 'Murielle Alvarez', 'murielle@test.com', '1234', '');
    
    $scope.editProfile = function() {
      profile.isEdit = true;
    };
    
    $scope.getClass = function() {
      return 'student-profile';
    };
  }]);
