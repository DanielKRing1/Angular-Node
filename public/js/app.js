(function(){

  console.log('a');

  var app = angular.module('site', ['ui.router']);

  console.log('b');

  app.config(function($stateProvider,$locationProvider, $urlRouterProvider) {
    // Get rid of '#!'' in url
    $locationProvider.hashPrefix('');

    // Set default state
    $urlRouterProvider.otherwise('/home');

  var homeState = {
    name: 'home',
    url: '/home',
    component: 'homeComponent'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    component: 'aboutComponent'
  }

  $stateProvider
  .state(homeState)
  .state(aboutState);
});


})();
