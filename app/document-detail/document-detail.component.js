'use strict';

// Register `documentDetail` component, along with its associated controller and template
angular.
  module('documentDetail').
  component('documentDetail', {
    templateUrl: 'document-detail/document-detail.template.html',
    controller: ['$http', '$routeParams',
      function DocumentDetailController($http, $routeParams) {
        var self = this;

        $http.get('documents/' + $routeParams.documentId + '.json').then(function(response) {
          self.document = response.data;
        });
      }
    ]
  });
