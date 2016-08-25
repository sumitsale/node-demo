var express = require('express');

var homeRouter = express.Router();

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

homeRouter.route('/')
	.get(function (req, res) {
	res.render('index', {title: 'home',
						nav:[
							{Text:'Books',url:'/books'},
							{Text:'Authors',url:'/authors'},
						],
						 books: books
						}
			  );
});

module.exports = homeRouter;