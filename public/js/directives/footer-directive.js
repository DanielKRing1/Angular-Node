angular.module('site').directive('footer', () => {
  return {
    restrict: 'E',
    templateUrl: 'public/html/templates/footer.html',
    controller: 'footerCtrl',
    controllerAs: 'fCtrl'
  };
});
