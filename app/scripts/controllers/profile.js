'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studentProfileApp
 */
angular.module('studentProfileApp')
  .controller('ProfileCtrl', ['$scope', '$rootScope', '$window', 'imageReader', '$cookies', 'Student', function ($scope, $rootScope, $window, imageReader, $cookies, Student) {
  
    var profile = this;
    var cUsername = $cookies.get('username');
    var cFullName = $cookies.get('fullName');
    var cEmail = $cookies.get('email');
    var cPassword = $cookies.get('password');
    var cImage = $cookies.get('image');
    if (!cUsername) {
      $window.location.href = '#/';
    }
    
    profile.student = new Student(cUsername, cFullName, cEmail, cPassword, cImage);
    profile.isReadonly = true;
    if (!cImage) {
      profile.imageSrc = 'images/User-Default.jpg';
    } else {
      profile.imageSrc = cImage;
    }
    
    profile.editProfile = function() {
      profile.isReadonly = false;
    };
    
    profile.cancelEdit = function() {
      console.log(profile.student);
      console.log(profile.oldStudent);
      profile.student = profile.getProfileCookie();
      profile.isReadonly = true;
    };
    
    profile.updateProfile = function() {
      profile.isReadonly = true;
        profile.updateProfileCookie();
    };
    
    profile.updateProfileCookie = function() {
      // Find tomorrow's date.
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
  
      // Set session for user | I use cookies for this one as sample
      $cookies.put('username', profile.student.username, {'expires': expireDate});
      $cookies.put('fullName', profile.student.fullName, {'expires': expireDate});
      $cookies.put('email', profile.student.email, {'expires': expireDate});
      $cookies.put('password', profile.student.password, {'expires': expireDate});
    };
    
    profile.getProfileCookie = function() {
      var cUsername = $cookies.get('username');
      var cFullName = $cookies.get('fullName');
      var cEmail = $cookies.get('email');
      var cPassword = $cookies.get('password');
      var cImage = $cookies.get('image');
      return new Student(cUsername, cFullName, cEmail, cPassword, cImage);
    };
    
    $scope.getFile = function() {
      imageReader.readAsDataUrl($scope.file, $scope)
        .then(function(result) {
          profile.imageSrc = result;
          $cookies.put('image', result);
        });
    };
    
    $scope.getClass = function() {
      return 'student-profile';
    };
  }]);
