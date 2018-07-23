app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Collections'; 
  $scope.promo = 'The Harry Porter Collections by J.K.Rowling.';
  $scope.products = [
    { 
      name: 'Harry Potter and the Philosopher\'s Stone', 
      price: 4.89, 
      pubdate: new Date('1997', '06', '26'), 
      cover: 'img/1.jpg',
      likes: 0,
      dislikes: 0 
    }, 
    { 
      name: 'Harry Potter and the Chamber of Secrets', 
      price: 5.75, 
      pubdate: new Date('1998', '07', '02'), 
      cover: 'img/2.jpg',
      likes: 0,
      dislikes: 0 
    }, 
    { 
      name: 'Harry Potter and The Prisoner of Azkaban', 
      price: 5.75, 
      pubdate: new Date('1999', '07', '08'), 
      cover: 'img/3.jpg',
      likes: 0,
      dislikes: 0 
    }, 
    { 
      name: 'Harry Potter and the Goblet of Fire', 
      price: 6.47, 
      pubdate: new Date('2000', '07', '08'), 
      cover: 'img/4.jpg',
      likes: 0,
      dislikes: 0 
    }, 
    { 
      name: 'Harry Potter and the Order of the Phoenix', 
      price: 6.47, 
      pubdate: new Date('2003', '06', '21'), 
      cover: 'img/5.jpg',
      likes: 0,
      dislikes: 0 
    }, 
    { 
      name: 'Harry Potter and the Half-Blood Princen', 
      price: 6.49, 
      pubdate: new Date('2005', '07', '16'), 
      cover: 'img/6.jpg',
      likes: 0,
      dislikes: 0 
    },
    {
     name: 'Harry Potter and the Deathly Hallows', 
      price: 6.47, 
      pubdate: new Date('2007', '07', '21'), 
      cover: 'img/7.jpg',
      likes: 0,
      dislikes: 0 
    } 
  ];
  $scope.plusOne = function(index) { 
    $scope.products[index].likes += 1; 
  };
  $scope.minusOne = function(index) { 
    $scope.products[index].dislikes += 1; 
  };
}]);
