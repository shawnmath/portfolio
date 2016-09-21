//GENERAL SETUP
var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),	
	mongoose = require('mongoose'),
	passport = require('passport'),
	localStrategy = require('passport-local');

var User = require('./models/user');

var routes = require('./routes/index'),
	work = require('./routes/work.js'),
	auth = require('./routes/auth.js'),
	contact = require('./routes/contact.js'),
	dashboard = require('./routes/dashboard.js');

var app = express();

//CONNECT DB
// mongodb://shawn:portfolio@ds035846.mlab.com:35846/smathew_portfolio
//mongoose.connect('mongodb://localhost:27017/portfolio');
mongoose.connect('mongodb://shawn:portfolio@ds035846.mlab.com:35846/smathew_portfolio');

mongoose.connection.on('open', function (ref) {
  console.log('Connected to Mongo server...');
});

mongoose.connection.on('error', function (err) {
  console.log('Could not connect to Mongo server...');
  console.log(err);
});

//VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

//PASSPORT CONFIG
app.use(require('express-session')({
	secret: 'Think before you speak, read before you think',
	resave: false,
	saveUninitialized: false	
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ROUTES MIDDLEWARE
app.use(auth);
app.use('/', routes);
app.use('/form', contact);
app.use('/api/work', work);
app.use('/dashboard', dashboard);

//SERVER
app.listen(3000, function(){
	console.log('SERVER STARTED');
});



