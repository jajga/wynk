'use strict';

/**
 * @ngdoc function
 * @name wynkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wynkApp
 */
angular.module('wynkApp')
  .controller('MainCtrl', function ($scope,getHomePage) {
    $scope.homeData=getHomePage.data;
    console.log($scope.homeData);
  });
