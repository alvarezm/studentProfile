'use strict';

/**
 * @ngdoc overview
 * @name studentProfileApp
 * @description
 * # studentProfileApp
 *
 * Main module of the application.
 */
angular
  .module('studentProfileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/student-image', {
        templateUrl: 'views/studentImage.html',
        controller: 'StudentImageCtrl',
        controllerAs: 'studentImage'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
