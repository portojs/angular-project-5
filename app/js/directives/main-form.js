/**
 * Created by Peter on 09.12.2015.
 */
"use strict";

angular.module('bobbleApp')
  .directive('mainForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-form.html'
    }
  });