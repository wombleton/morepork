/* GET home page */
var md = require('markdown').markdown.toHTML;

exports.index = function(req, res) {
  res.render('index', { 
    md: md,
    'title': 'Morepork', 
    'article': {
      'title': 'Having so much fun!',
      'publishedDate': '2013-04-06',
      'body': 'This is the *shizzle*. I am having so much fun, and we just did [Codemania](http://codemania.co.nz/)'
    }
  });
};
