/**
 * Created by Peter on 01.12.2015.
 */
'use strict';

angular.module('bobbleApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/sale', {
        templateUrl: 'templates/pages/sale/index.html',
        controller: 'saleIndexController'
      })
      .when('/contact', {
        templateUrl: 'templates/pages/contact/index.html'
      })
      .when('/', {
        templateUrl: 'templates/pages/sale/index.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  }]);