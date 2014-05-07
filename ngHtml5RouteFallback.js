/**
 * Angular include to fix routing on pushstate failure
 * ---------------------------
 *
 * Authored by  Jeff Bachand
 *              jeff@dailybreak.com
 *              http://www.dailybreak.com/
 *
 * 5/6/14 10:25 PM
 */

angular.module('ngHtml5RouteFallback', [])
  .run([ '$window', function($window) {
    var buggyAndroid = parseInt((/android (\d+)/.exec($window.navigator.userAgent.toLowerCase()) || [])[1], 10) < 4;
    if (!history.pushState || buggyAndroid || 1==1) {
      if ($window.location.hash) {
        if($window.location.pathname !== '/'){
           $window.location.replace($window.location.pathname+'/#!' + $window.location.hash.substr(2)); //Hash and a path, just keep the hash (redirect)
         }
      } else {

        $window.location.replace($window.location.pathname+'/#!' + $window.location.pathname); //No hash, take path
      }
    }

  }]);
