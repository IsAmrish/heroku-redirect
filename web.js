var express = require('express');
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || 'https://openebs-community.slack.com/join/shared_invite/enQtMjQzMTg4NTcyNTY2LTJiMzVjYjA5ZDk3YmI4NjAxY2QyYmI3MTA1MmUxMTAzNTU0NTM5NTViOTIxMjA1NWQ4NzVmMTBiNjk0NDU1YzQ';
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  response.redirect(redirectStatus, newBaseURL + request.url);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
