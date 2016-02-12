// $http.get('http://localhost:3004/result?stockNumber=' + $scope.stock).success(function(data) {

// })

// when submitting the add form, send the text to the node API
$scope.createStock = function() {
        $http.get('http://localhost:3004/result?stockNumber=' + $scope.stock).success(function(data) {

        });
