'use strict';

describe('documentDetail', function() {

  // Load the module that contains the `documentDetail` component before each test
  beforeEach(module('documentDetail'));

  // Test the controller
  describe('documentDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('documents/xyz.json').respond({name: 'document xyz'});

      $routeParams.documentId = 'xyz';

      ctrl = $componentController('documentDetail');
    }));

    it('should fetch the document details', function() {
      expect(ctrl.document).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.document).toEqual({name: 'document xyz'});
    });

  });

});
