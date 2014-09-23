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

      .state('about', {
        url: "/about",
        templateUrl: "views/about.html",
    })

    .state('climate', {
        url: "/climate",
        templateUrl: "views/climate.html",
        // controller: "MainCtrl"
    })

    .state('mtn', {
      url: "/mtn",
      templateUrl: "views/mtn.html",
      // controller: "MainCtrl"
    })

    .state('des', {
      url: "/des",
      templateUrl: "views/des.html",
      // controller: "MainCtrl"
    })

    .state('temp', {
      url: "/temp",
      templateUrl: "views/temp.html",
      // controller: "MainCtrl"
    })

    .state('coast', {
      url: "/coast",
      templateUrl: "views/coast.html",
      // controller: "MainCtrl"
    })

    .state('size', {
      url: "/size",
      templateUrl: "views/size.html",
      // controller: "MainCtrl"
    })

    .state('small', {
      url: "/small",
      templateUrl: "views/small.html",
      // controller: "SmallCtrl"
    })

    .state('medium', {
      url: "/medium",
      templateUrl: "views/medium.html",
      // controller: "MedCtrl"
    })

    .state('large', {
      url: "/large",
      templateUrl: "views/large.html",
      // controller: "LargeCtrl"
    })

    .state('xlarge', {
      url: "/xlarge",
      templateUrl: "views/xlarge.html",
      // controller: "XlargeCtrl"
    })
  });