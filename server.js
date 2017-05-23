var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
// var cricapi = require("node-cricapi");
var request = require('request');

app.use(express.static(path.resolve(__dirname, 'www')));

// Start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('listning to Port', app.get('port'));
});

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};
app.use(allowCrossDomain);
// bundle our routes
var apiRoutes = express.Router();
// connect the api routes under /api/*
app.use('/api', apiRoutes);

apiRoutes.get('/scorelist', function (req, res) {
  var options = {
    host: 'http://cricapi.com/api/matches/',
    path: '/',
 //   port: '1338',
    //This is the only line that is new. `headers` is an object with the headers to request
    headers: {'apikey': 'E08rQGFIbOPj24fZOywW5RQijTq1'}
  };

  callback = function(response) {
    var str = '';
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      console.log(str);
    });
  };

  var req = http.request(options, callback);
  req.end();
});


// cricapi.cricketMatches(function(databundle){
//   console.log(databundle);
// });

apiRoutes.get('/matchlist', function (req, res) {
  request({
    url: 'https://query.yahooapis.com/v1/yql?q=desc%20cricket.scorecard.live&format=json&diagnostics=true&callback=',
    json: true
  }, function (error, response, body) {
    console.log(JSON.stringify(body, undefined, 2));
  });

});
