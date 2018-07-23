describe('myApp', function(){

  beforeEach(module('myApp'));

  it('Did you add $scope.product to the controller?', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

    expect(scope.product).toEqual({name: "Harry Potter and the Chamber of Secrets", price: 5.75});
  }));

});