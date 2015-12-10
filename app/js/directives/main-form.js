/**
 * Created by Peter on 09.12.2015.
 */
"use strict";

angular.module('bobbleApp')
  .directive('mainForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-form.html',
      scope: {
        list: '='
      },
      controller: 'mainFormController',
      link: function(scope, element, attrs) {
        scope.item = {};
        scope.submitForm = function() {
          console.log(scope.list.length);
          scope.item.id = scope.list.length + 1;
          scope.list.push(scope.item);
          scope.item = {};
        };
      }
    }
  });