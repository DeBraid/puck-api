var express = require('express');
var bodyParser  = require('body-parser');
var app = express();
// var goals = require('./skaters-goals-201516.js');
// var corsi = require('./skaters-corsi-201516.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Hello World from app.js of PUCK-API! ');
});

app.get('/skaters/:stat_type', function(req, res) {
  var data_type = require('./skaters-'+req.params.stat_type+'-201516.js');
  res.json(data_type);
});

// app.get('/skaters/:season', function(req, res) {
//   var q = req.params.season;
//   res.json(skaters[q]);
// });

app.listen(process.env.PORT || 4730);