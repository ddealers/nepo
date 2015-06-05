// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('nepo', ['ionic','ionic-material','nepo.directives', 'nepo.controllers', 'nepo.services', 'nepo.ui'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })
  .state('app.abacus', {
    url: "/abacus",
    views: {
      'menuContent': {
        templateUrl: "templates/abacus.html"
      }
    }
  })
  .state('app.thumbnail', {
    url: "/thumbnail",
    views: {
      'menuContent': {
        templateUrl: "templates/thumbnail.html"
      }
    }
  })
  .state('app.fichas', {
    url: "/fichas",
    views: {
      'menuContent': {
        templateUrl: "templates/fichas.html"
      }
    }
  });
  $urlRouterProvider.otherwise('/app/abacus');
});

var uiClasses = angular.module('nepo.ui', []);
var servicesProviders = angular.module('nepo.services', []);
var controllersProviders = angular.module('nepo.controllers', []);