var express = require('express');
var path = require('path');
var ejs = require('ejs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var port = 3000;

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// view engine setup
// app.set('views', path.join(__dirname, 'src/app/views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));

app.use('/', routes);
app.use('/users', users);


app.set('port', port);
var server = http.createServer(app);
server.listen(port);



