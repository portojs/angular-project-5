/**
 * Created by Peter on 08.12.2015.
 */
angular.module('bobbleApp')
  .controller('saleIndexController', function($scope, ShoppingService) {
    $scope.shoppingList = ShoppingService.query();
  });