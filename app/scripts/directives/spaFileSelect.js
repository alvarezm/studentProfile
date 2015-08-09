'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.directives:spaFileSelect
 * @description
 * # spaFileSelect
 * directive of the studentProfileApp
 */
angular.module('studentProfileApp')
  .directive("spaFileSelect",function() {    
    return {
      link: function($scope, el) {          
        el.bind("change", function(e) {
          $scope.file = (e.srcElement || e.target).files[0];
          $scope.getFile();
        });          
      }        
    };
  });