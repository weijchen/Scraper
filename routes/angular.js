// var scraperApp = angular.module('ngScraper', []);

// // when submitting the add form, send the text to the node API
// scraperApp.controller('scraperCtrl', ['$scope', function($scope) {
//     $scope.createStock = function() {
//         $http.get('http://localhost:3004/result?stockNumber=' + $scope.stock).success(function(data) {

//         });
//     }
// }]);
var scraperApp = angular.module('ngScraper', []);

// when submitting the add form, send the text to the node API
scraperApp.controller('scraperCtrl', ['$scope', function($scope) {
	$scope.createStock = function() {
        $http.get('http://finance.yahoo.com/q?s=' + $scope.stock).success(function(data) {
                request(url, function(error, response, html) {
                    if (!error) {
                        var $ = cheerio.load(html);
                        var subArray = [];

                        $('.title h2').filter(function() {
                                var data = $(this);
                                subArray.push("Name:" + data.text());

                            }),
                            $('.time_rtq_ticker').filter(function() {
                                var data = $(this);
                                subArray.push("Price:" + data.text());
                                // console.log(subArray);
                            }),

                            $('div.first > div > div > table').each(function() {
                                $(this).children().each(function() {
                                    subArray.push($(this).text());
                                });
                            });
                    }
                    fs.writeFile('../output.txt', JSON.stringify(subArray), function(err) {
                        console.log('File successfully written! - Check your project directory for the output.json file');
                    })
                });
            })
        }}]);
