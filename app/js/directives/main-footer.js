/**
 * Created by Peter on 30.11.2015.
 */
'use strict';

angular.module('bobbleApp')
  .directive('mainFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-footer.html'
    };
  });