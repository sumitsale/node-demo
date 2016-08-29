var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine', 'jade');

var nav = [
			{Text:'Books',url:'/books'},
			{Text:'Authors',url:'/authors'},
		  ];

var bookRouter = require('./src/routes/bookRoutes')(nav);
app.use('/books', bookRouter);

var adminRouter = require('./src/routes/adminRoutes')(nav);
app.use('/admin', adminRouter);

var homeRouter = require('./src/routes/homeRoutes');
app.use('/', homeRouter);




app.get('/books', function (req, res) {
	res.send('Hello Books');
});

app.listen(port, function (err) {

	console.log('running server on port ' + port);

});

