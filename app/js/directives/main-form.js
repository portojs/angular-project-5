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
      require: '^saleIndexController',
      link: function(scope, element, attrs, saleIndexController){
        scope.submitForm = function(item) {
          saleIndexController.shoppingListLocal.append(item);
        };
      }
    }
  });