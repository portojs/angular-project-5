/**
 * Created by Peter on 12.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .service('TypesService', function($resource) {
    return $resource('json/types.json', {}, {});
  });