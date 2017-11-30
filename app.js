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