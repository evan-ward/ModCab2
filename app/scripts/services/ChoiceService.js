'use strict';

var modCabsApp = angular.module('modCabsApp', [
  'ui.router'
]);

  modCabsApp.service('choiceService', function () {
    
    var choice = {};

    this.setWhere = function(where) {
        choice.where = where;
        console.log (choice.where);
    }

    this.setClimate = function(climateType) {
    	choice.climate = climateType;
    	console.log (choice.climate);
    }

    this.getClimate = function() {
    	if (choice.climate) {
    		return choice.climate;
    		console.log (choice.climate);

    	} else {
            var url = $location.path().split('/')
    		choice = url[url.length - 1];
    		return choice.climate;
    	} 

    this.setSize = function(size) {
        choice.size = size;
        console.log (choice.size)
    }

    this.getSize = function() {
        if (choice.size) {
            return choice.size;
            console.log (choice.size);
        } else {
            var url = $location.path().split('/')
            choice = url[url.length - 1];
            return choice.size;
        }
    }
    	
    	
    }

  });