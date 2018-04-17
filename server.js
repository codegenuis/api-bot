var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index.js');
var tasks = require('./routes/tasks');
var courses = require('./routes/courses');

var port = 5000;

var app = express();

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname,'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api',tasks);
app.use('/api', courses);

app.listen(port, function(){
	console.log('Server started on port' +port);
})
