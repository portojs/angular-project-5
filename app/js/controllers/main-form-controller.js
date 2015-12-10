/**
 * Created by Peter on 09.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .controller('mainFormController', function($scope) {
    $scope.showForm = false;
    $scope.blurFunction = function() {
      console.log("defocused");
    };
    $scope.changeFunction = function() {
      console.log("Symbols entered: " + $("#form-title").val().length);
    };
  });