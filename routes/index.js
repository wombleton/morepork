/* GET home page */
var md = require('markdown').markdown.toHTML,
    repository = require('repository');

exports.index = function(req, res) {

  repository.getArticle(1, function(err, article) {
      if (err) throw err;

    res.render('index',  { md: md, title: 'Morepork', article: article });
  });
};
