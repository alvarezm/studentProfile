'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studentProfileApp
 */
angular.module('studentProfileApp')
  .controller('ProfileCtrl', ['$scope', '$rootScope', '$window', function ($scope, $rootScope, $window) {
    // check if user has already registered
    if (!$rootScope.student) {
      $window.location.href = '#/';
    }
    
    var profile = this;
    profile.student = $rootScope.student;
    profile.oldStudent = $rootScope.student;
    //console.log(profile.oldStudent);
    profile.isReadonly = true;
    
    profile.editProfile = function() {
      profile.isReadonly = false;
    };
    
    profile.cancelEdit = function() {
      //console.log(profile.student);
      //console.log(profile.oldStudent);
      profile.student = profile.oldStudent;
      profile.isReadonly = true;
    };
    
    profile.updateProfile = function() {
      profile.oldStudent = profile.student;
      profile.isReadonly = true;
    };
    
    $scope.getClass = function() {
      return 'student-profile';
    };
  }]);
