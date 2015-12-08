/**
 * Created by Peter on 08.12.2015.
 */
angular.module('bobbleApp')
  .controller('saleIndexController', function($scope, ShoppingService, GravatarProvider) {
    $scope.shoppingList = ShoppingService.query();
    $scope.gravatarUrl = function(email) {
      return GravatarProvider(email);
    }
  });