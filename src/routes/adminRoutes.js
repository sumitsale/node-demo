var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [
		{
			title: 'war of peace1',
			genre: 'historical1',
			author: 'John1',
			read: false
		},{
			title: 'war of peace2',
			genre: 'historical2',
			author: 'John2',
			read: false
		},{
			title: 'war of peace3',
			genre: 'historical3',
			author: 'John3',
			read: false
		},{
			title: 'war of peace4',
			genre: 'historical4',
			author: 'John4',
			read: false
		},{
			title: 'war of peace5',
			genre: 'historical5',
			author: 'John5',
			read: false
		},
	];

var router = function(nav) {

	adminRouter.route('/addBooks')
		.get(function(req, res){
		var url = 'mongodb://localhost:27017/libraryApp';
		
		mongodb.connect(url, function(err, db){
			
			var collection = db.collection('books');
			collection.insertMany(books, 
						function(err, results){
				res.send(results);
				
			});
			db.close();
		});
		
		
	});
	
	return adminRouter;
};

module.exports = router;
