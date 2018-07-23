'use strict';

describe('documentList', function() {

  // Load the module that contains the `documentList` component before each test
  beforeEach(module('documentList'));

  // Test the controller
  describe('DocumentListController', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('documents/documents.json')
                  .respond([{name: 'Employee Handbook'}, {name: 'Fuel Allowances'}]);

      ctrl = $componentController('documentList');
    }));

    it('should create a `documents` property with 2 documents fetched with `$http`', function() {
      expect(ctrl.documents).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.documents).toEqual([{name: 'Employee Handbook'}, {name: 'Fuel Allowances'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('type');
    });

  });

});
