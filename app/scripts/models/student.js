'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.models:Student
 * @description
 * # Student
 * Model of the studentProfileApp
 */
angular.module('studentProfileApp')
  .factory('Student', function () {    
    
    var student = function(username, fullName, email, password, image) {
      this.username = username;
      this.fullName = fullName;
      this.password = password;
      this.email = email;
      this.image = image;
    };
    
    return student;
  });