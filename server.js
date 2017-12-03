var express = require('express');
var expressHandlebars = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');


app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_w19vt8ft:ko12sd8psrkjkf357eisq45hgu@ds121456.mlab.com:21456/heroku_w19vt8ft";

mongoose.connect('MONGODB_URI');

var db = mongoose.connection;

db.on('error', function (err) {
		console.log('Mongoose Error: ', err);
	});
	db.once('open', function () {
		console.log('Mongoose connection successful.');
	});

var note = require('./models/Note.js');
var article = require('./models/Article.js');


//routes

app.get('/', function(req, res) {
	res.send(index.html);
});

//scrape articles using cheerio

app.get ("/scrape", function (req, res) {
	
	request("http://....", function (error, response, html){
		var $ = cheerio.load(html);
		
		$(".title").each(function(i, element){
			var title = $(this).children("a").text();
			var link = $(this).children("a").attr("href");

			if (title && link) {
				db.scrapedData.save({
					title: title,
					link: link
			},
			function(error, saved) {
				if (error) {
					console.log(error);
				}

				else {
					console.log(saved);
				}
	});		


}

});


res.send("scrape complete");

});



//listen on port 3000

app.listen(3000, function() {
	console.log("app running on port 3000");

});


