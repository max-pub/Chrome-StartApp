var fs = require('fs');
var minify = require('html-minifier').minify;

var html = fs.readFileSync('build.js','utf8');
// console.log('html',html);


var mini = minify(html, {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  minifyJS: true,
  minifyCSS: true,
  removeAttributeQuotes: true,
  removeComments: true
});
console.log ('mini::',mini.toString());


// fs.readFile('build/csp.html', function (err, data) {
// 	console.log(data);
// 	return;


// 	// console.log(result);

// });


