/**
 * Created by Peter on 08.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .service('ShoppingService', function($resource){
    return $resource('json/shopping.json', {}, {});
  });