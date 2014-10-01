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

      .state('contact', {
        url: "/contact",
        templateUrl: "views/contact.html",
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

// modCabsApp.controller("PlanController", function(){
//   this.plan = plans;

// });

// var plans = [
// {
//   name: 'small',
//   size: '300sf',
//   price: '$500',
//   description: 'Small and simple, this cabin offers just what you need: a good sized deck, a dry place to sleep, a small kitchen, and enough space to hang out...if it\'s raining outside, of course.'
// },
// {
//   name: 'medium',
//     size: '500sf',
//     price: 800,
//     sleeps: 'sleeps: 4 adults',
//     description: 'Cozy. This cabin gives you everything you get in the small plan, but with added elbow room. The medium is more suitable for colder climates, where you might spend a little more time indoors.'
//   }
// ];
