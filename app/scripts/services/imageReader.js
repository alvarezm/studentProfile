'use strict';

/**
 * @ngdoc function
 * @name studentProfileApp.services:imageReader
 * @description
 * # imageReader
 * Model of the studentProfileApp
 */
angular.module('studentProfileApp')
  .factory('imageReader', ['$q', function ($q) {
    var onLoad = function(reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };

    var onError = function (reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };

    var onProgress = function(reader, scope) {
      return function (event) {
        scope.$broadcast("fileProgress", {
          total: event.total,
          loaded: event.loaded
        });
      };
    };

    var readAsDataURL = function (file, scope) {
      var deferred = $q.defer();
      
      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred, scope);
      reader.onerror = onError(reader, deferred, scope);
      reader.onprogress = onProgress(reader, scope);
      reader.readAsDataURL(file);
      
      return deferred.promise;
    };

    return {
      readAsDataUrl: readAsDataURL  
    };
  }]);