var express = require('express');
var app = express();
var path = require('path');

app.get('/brands/:brand', function (req, res) {
  console.log(req.params.brand);
  res.sendFile(__dirname + '/public/static/index.html');
});

app.listen(process.env.PORT || 4321, function () {
  console.log('listening on port 4321!');
});

app.use(express.static(path.join(__dirname, 'public/static')));
app.use('/brands', express.static(path.join(__dirname, 'public/brands/')));

module.exports = app;
