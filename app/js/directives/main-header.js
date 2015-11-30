/**
 * Created by Peter on 30.11.2015.
 */
'use strict';

angular.module('bobbleApp')
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html'
    };
  });