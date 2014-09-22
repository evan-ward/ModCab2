'use strict';

var modCabsApp = angular.module('modCabsApp', [
  'ui.router'
]);

modCabsApp.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html"
      })

      .state('where', {
        url: "/where",
        templateUrl: "views/where.html"
    })

    .state('climate', {
        url: "/climate",
        templateUrl: "views/climate.html",
        controller: "ClimateCtrl"
    })

    .state('use', {
      url: "/use",
      templateUrl: "views/use.html"
    })

    .state('size', {
      url: "/size",
      templateUrl: "views/size.html",
      controller: "SizeCtrl"
    });
  });