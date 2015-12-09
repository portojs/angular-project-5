/**
 * Created by Peter on 08.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .directive('mainList', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-list.html',
      scope: {
        list: '=',
        gravatarUrl: '='
      }
    }
  });