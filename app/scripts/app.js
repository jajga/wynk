'use strict';

/**
 * @ngdoc overview
 * @name wynkApp
 * @description
 * # wynkApp
 *
 * Main module of the application.
 */
angular
  .module('wynkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('wynk', {
        abstract: true,
        views: {
          'header': {
            templateUrl: 'views/common/header.html'
          },
          'footer': {
            templateUrl: 'views/common/footer.html'
          }
        }
      })       
      .state('wynk.home', {
        url: '/',
        views: {
          '@':{
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        },
        resolve:{
            getHomePage: function(home){
              return home.getHomeData();
            }
        }        
    });
        
  });
