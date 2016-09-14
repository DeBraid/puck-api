var express = require('express');
var bodyParser  = require('body-parser');
var app = express();
var skaters = require('./skaters.js');
// console.log('skaters', skaters);

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

app.get('/skaters', function(req, res) {
  res.json(skaters);
});

app.get('/skaters/:season', function(req, res) {
  var q = req.params.season;
  res.json(skaters[q]);
});

app.listen(process.env.PORT || 4730);