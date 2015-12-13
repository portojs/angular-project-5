/**
 * Created by Peter on 10.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .directive('typeSelect', function(TypesService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/type-select.html',
      scope: {
        types: '=',
        activeType: '='
      },
      link: function(scope, element, attrs) {
        scope.types = TypesService.query();
      },
      controller: function($scope) {
        this.getActiveType = function() {
          return $scope.activeType;
        };
        this.setActiveType = function(type) {
          $scope.activeType = type.title;
        };
        this.notActiveType = function() {
          $scope.activeType = "";
        };
      }
    }
  });