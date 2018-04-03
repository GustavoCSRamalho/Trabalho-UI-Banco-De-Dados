
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.set('view engine','ejs');
//pasta das views
app.set('views',"./app/views");


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/books', function (req, res) {
    
});

app.post('/books', function (req, res) {
    
});

app.get('/books:id', function (req, res) {
    
});

app.delete('/books:id', function (req, res) {
    
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


