/**
 * Created by Peter on 10.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .directive('typeItem', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/type-item.html'
    }
  });