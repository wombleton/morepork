var mongoose = require('mongoose');

var article;

function connect() {

	// connect to mongo and open the db
	mongoose.connect('mongodb://localhost/test');

	// get the article for id=1
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		console.log('yay, connection opened!');
	});

	var articleSchema = mongoose.Schema({
		id : Number,
		title: String,
	  	publishedDate: String,
	  	body: String
	});

	article = mongoose.model('article', articleSchema); // imagine the 's', CoC
}

function getArticle(id, callback) {
  article.findOne({ id : id }, callback);
}

exports.getArticle = getArticle;
exports.connect = connect;
