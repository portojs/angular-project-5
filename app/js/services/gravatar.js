/**
 * Created by Peter on 08.12.2015.
 */
angular.module('bobbleApp')
  .provider('GravatarProvider', function() {
    var avatarSize = 60;
    var avatarUrl = 'http://www.gravatar.com/avatar/';
    this.$get = function() {
      return function(email) {
        return avatarUrl + CryptoJS.MD5(email) + "?size:=" + avatarSize.toString();
      }
    };
  });