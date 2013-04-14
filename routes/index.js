/* GET home page */
var md = require('markdown').markdown.toHTML,
    db = require('../lib/db');

exports.index = function(req, res) {

  db.getArticle(1, function(err, article) {
      if (err) throw err;

    res.render('index',  { md: md, title: 'Morepork', article: article });
  });
};
