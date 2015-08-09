'use strict';

/**
 * @ngdoc directive
 * @name studentProfileApp.directives:spaValidateForm
 * @description
 * # spaValidateForm
 * Directive of the studentProfileApp
 */
angular.module('studentProfileApp')
  .directive('spaValidateForm', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs) {
        //console.log(scope.signUpForm.username);
        if (scope.register.username.$dirty && !scope.register.username.$valid) {
          attrs.$set('tooltip', 'This field is required');
          attrs.$set('tooltip-placement', 'left');
        } else {
          attrs.$set('tooltip', '');
        }
        /*scope.$watch('!signUpForm.username.$valid && signUpForm.username.$dirty', function() {
          console.log();
        });*/
      }
    };
  });
