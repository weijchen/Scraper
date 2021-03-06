var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/result', function(req, res) {
    console.log(req.query.stockNumber);
    var url = 'http://finance.yahoo.com/q?s=' + req.query.stockNumber;

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
});
module.exports = router;