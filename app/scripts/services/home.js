'use strict';

/**
 * @ngdoc service
 * @name wynkApp.home
 * @description
 * # home
 * Service in the wynkApp.
 */
angular.module('wynkApp')
  .service('home', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getHomeData=function(){
 		var promise = $http.get('http://private-f4bf5-music6.apiary-mock.com/search');
 		return promise;
 	}
  });
