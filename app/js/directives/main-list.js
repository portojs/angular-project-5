/**
 * Created by Peter on 08.12.2015.
 */
angular.module('bobbleApp')
  .directive('mainList', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-list.html'
    }
  });