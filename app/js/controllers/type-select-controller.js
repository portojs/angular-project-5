/**
 * Created by Peter on 12.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .controller('typeSelectController', function($scope, TypesService) {
    $scope.types = TypesService.query();
    $scope.getActiveType = function() {
      return $scope.activeType;
    };
    $scope.setActiveType = function(type) {
      $scope.activeType = type;
    };
    $scope.notActiveType = function() {
      $scope.activeType = "";
    };
  });