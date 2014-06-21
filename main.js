function GroceryListController($scope){
    $scope.items = [
        {product: {name : 'Milk', price: 2.2}, amount: 5, bought: true},
        {product: {name : 'Coffee', price: 5.4}, amount: 2, bought: false},
        {product: {name : 'Soda', price: 1.9}, amount: 1, bought: true},
    ];
}
