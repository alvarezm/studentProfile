'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studentProfileApp
 */
angular.module('studentProfileApp')
  .controller('ProfileCtrl', ['$scope', '$rootScope', '$window', 'imageReader', function ($scope, $rootScope, $window, imageReader) {
    // check if user has already registered
    if (!$rootScope.student) {
      //$window.location.href = '#/';
    }
    
    var profile = this;
    profile.student = $rootScope.student;
    profile.oldStudent = $rootScope.student;
    profile.imageSrc = 'images/User-Default.jpg';
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
    
    $scope.getFile = function() {
      imageReader.readAsDataUrl($scope.file, $scope)
        .then(function(result) {
          profile.imageSrc = result;
        });
    };
    
    $scope.getClass = function() {
      return 'student-profile';
    };
  }])
  .directive("ngFileSelect",function() {    
    return {
      link: function($scope, el) {          
        el.bind("change", function(e) {
          $scope.file = (e.srcElement || e.target).files[0];
          $scope.getFile();
        });          
      }        
    }
  });
