/**
 * Created by Peter on 08.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .controller('saleIndexController', function($scope, ShoppingService, GravatarProvider) {
    $scope.showForm = false;
    $scope.showList = false;
    $scope.shoppingList = ShoppingService.query();
    $scope.shoppingListLocal = [
      {
        "id" : 1,
        "title" : "Doll House",
        "type" : "general",
        "price": 5.99,
        "seller" : "john.doe@gmail.com"
      },
      {
        "id" : 2,
        "title" : "Plasma TV",
        "type" : "electronics",
        "price": 125.99,
        "seller" : "dick_buick@gmail.com"
      },
      {
        "id" : 3,
        "title" : "AK-47 automatic rifle",
        "type" : "military",
        "price": 50.00,
        "seller" : "jimgordon@gmail.com"
      },
      {
        "id" : 4,
        "title" : "Tomahawk missile",
        "type" : "military",
        "price": 5580.99,
        "seller" : "mcmilligan@gmail.com"
      },
      {
        "id" : 5,
        "title" : "Villa in Italy, Sicily",
        "type" : "real property",
        "price": 5499000.99,
        "seller" : "jordano-bruno@gmail.com"
      }
    ];
    $scope.gravatarUrl = function(email) {
      return GravatarProvider(email);
    };
  });