// modules 
var express = require('express');
var app = express();
//var routes = require('./routes');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes 
//app.use('/', routes);

app.get('*', (req, res) => {
    res.sendfile('./views/index.html');  
});

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(3000, () => {
  console.log('App listening on port 3000');
});              