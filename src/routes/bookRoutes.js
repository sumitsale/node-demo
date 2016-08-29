var express = require('express');
var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
require('nodedump');

var bookRouter = express.Router();

	var router = function(nav) {
		
	bookRouter.route('/')
		.get(function (req, res) {
		
		var url = 'mongodb://localhost:27017/libraryApp';
		
		mongodb.connect(url, function(err, db){
		
		mongodb.connect(url, function(err, db){
			var collection = db.collection('books');
			 collection.find({}).toArray(function(err, results){
				 
				 		res.render('books', {title: 'books',
							nav: nav,
							 books: results
							});
			 });
		});	
	});
	});


	bookRouter.route('/:id')
			.get(function (req, res) {

			var id = new objectID(req.params.id);
nodedump(id);
			/*var url = 'mongodb://localhost:27017/libraryApp';

			mongodb.connect(url, function(err, db){

				mongodb.connect(url, function(err, db){
					var collection = db.collection('books');
					 collection.findOne({_id:id}), function(err, results){

								res.render('books', {title: 'books',
									nav: nav,
									 books: results
									});
					 };
				});	
			});
		*/
	});

return bookRouter;	
};

module.exports = router;