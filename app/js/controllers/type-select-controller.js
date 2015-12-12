/**
 * Created by Peter on 12.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .controller('typeSelectController', function($scope, TypesService) {
    $scope.types = TypesService.query();
  });