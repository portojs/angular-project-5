/**
 * Created by Peter on 07.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .controller('mainHeaderController', function($scope, $location) {
    $scope.selected = $location.path() === '/sale' ?  1 : 2;
    $scope.checkSelected = function(selected) {
      return $scope.selected === selected;
    };
    $scope.changeSelected = function(selected) {
      $scope.selected = selected;
    }
  });