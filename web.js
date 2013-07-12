var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

 var fs = require('fs');
  console.log('reading index.html');

  var contents_buffer = fs.readFileSync('index.html');
  var contents = contents_buffer.toString();
  response.send(contents);

  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
