/* GET home page */
var md = require('markdown').markdown.toHTML;

exports.index = function(req, res) {
  res.render('index', { 
  md: md,
  'title': 'Morepork', 
  'article': 'This is the *shizzle*' });
};
