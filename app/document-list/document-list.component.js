'use strict';

// Register `documentList` component, along with its associated controller and template
angular.
  module('documentList').
  component('documentList', {
    templateUrl: 'document-list/document-list.template.html',
    controller: ['$http', function DocumentListController($http) {
      var self = this;
      self.orderProp = 'added';
      self.orderProp = 'type';

      $http.get('documents/documents.json').then(function(response) {
        self.documents = response.data;
      });
    }]
  });
