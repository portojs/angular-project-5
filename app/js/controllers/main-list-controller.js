/**
 * Created by Peter on 12.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .controller('mainListController', function($scope, TypesService) {
    $scope.types = TypesService.query();
  });