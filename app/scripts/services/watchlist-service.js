'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.WatchlistService
 * @description
 * # WatchlistService
 * Service in the stockDogApp.
 */
angular.module('stockDogApp')
  .service('WatchlistService', function WatchListService() {
    var loadModel = function() {
      return {
        watchLists: localStorage['StockDog.watchLists'] ?
          JSON.parse(localStorage['StockDog.watchLists']) : [],
        nextId: localStorage['StockDog.nextId'] ?
          parseInt(localStorage['StockDog.nextId'], 10) : 0
      };
    };
  });
