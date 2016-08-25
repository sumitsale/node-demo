var express = require('express');

var bookRouter = express.Router();

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

bookRouter.route('/')
	.get(function (req, res) {
	res.render('books', {title: 'books',
						nav:[
							{Text:'Books',url:'/books'},
							{Text:'Authors',url:'/authors'},
						],
						 books: books
						}
			  );
});


bookRouter.route('/:id')
	.get(function (req, res) {
		var id = req.params.id;
		res.render('bookView', {title: 'book',
						nav:[
							{Text:'Books',url:'/books'},
							{Text:'Authors',url:'/authors'},
						],
						 book: books[id]
						}
			  );
});

module.exports = bookRouter;