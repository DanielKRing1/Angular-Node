angular.module('site').controller('footerCtrl', ($scope) => {
  $scope.getTime = () => {
    return new Date().getTime();
  };
});
