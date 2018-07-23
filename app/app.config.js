'use strict';

angular.
  module('documentApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/documents', {
          template: '<document-list></document-list>'
        }).
        when('/documents/:documentId', {
          template: '<document-detail></document-detail>'
        }).
        otherwise('/documents');
    }
  ]);
