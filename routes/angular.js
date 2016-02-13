var scraperApp = angular.module('ngScraper', []);

// when submitting the add form, send the text to the node API
scraperApp.controller('scraperCtrl', ['$scope', function($scope){
	$scope.createStock = function() {
        $http.get('http://localhost:3004/result?stockNumber=' + $scope.stock).success(function(data) {

        });
}}]);