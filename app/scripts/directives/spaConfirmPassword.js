'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.directives:spaConfirmPassword
 * @description
 * # MainCtrl
 * directive of the studentProfileApp
 */
angular.module('studentProfileApp')
  .directive('spaConfirmPassword', function() {
    return {
      require: 'ngModel',
      scope: {
        reference: '=spaConfirmPassword'
      },
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {

          var noMatch = viewValue !== scope.reference;
          ctrl.$setValidity('noMatch', !noMatch);
        });

        scope.$watch("reference", function(value) {
          ctrl.$setValidity('noMatch', value === ctrl.$viewValue);
        });
      }
    };
  });