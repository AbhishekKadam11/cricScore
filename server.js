var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve(__dirname, 'www')));

// Start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('listning to Port', app.get('port'));
});
