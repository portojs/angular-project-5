/**
 * Created by Peter on 10.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .directive('typeItem', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/type-item.html',
      scope: {
        type: '=',
        activeType: '='
      },
      require: '^typeSelect',
      link: function(scope, element, attrs, typeSelect) {
        scope.makeActive = function() {
          if (typeSelect.getActiveType() === scope.type.title)  {
            typeSelect.notActiveType();
          }
          else {
            typeSelect.setActiveType(scope.type);
          }
        };
        scope.typeActive = function() {
          return typeSelect.getActiveType() === scope.type.title;
        };
      }
    }
  });