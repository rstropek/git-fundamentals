# gulp-ssi
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Server Side Includes parser plugin for [gulp](https://github.com/wearefractal/gulp)

Works with both include types

```html
<!--#include file="includes/navigation.html" -->
```

```html
<!--#include virtual="../templates/navigation.html" -->
```

And now also correctly interprets directives from the root of a site 

```html
<!--#include file="/includes/navigation.html" -->
```

## Usage

First, install `gulp-ssi` as a development dependency:

```shell
npm install --save-dev gulp-ssi
```

Then, add it to your `gulpfile.js`:

```javascript
var ssi = require("gulp-ssi");

gulp.src("./src/*.ext")
	.pipe(ssi())
	.pipe(gulp.dest("./dist"));
```

## Options
```javascript
var ssi = require("gulp-ssi");

gulp.src("./src/*.ext")
	.pipe(ssi({root:'/some/path'}))
	.pipe(gulp.dest("./dist"));
```
### root (optional)
Type: `String`  
Default: File directory

Set the location where the linked files are hosted. I've preserved this feature to prevent breaking existing clients. It works fine, but it makes assumptions that all relative links eventually resolve to the root of the root directory. So...

With a root of /myroot and an include that looks like 
```<!--#include file="../../deeper/one.inc" --> ```  ssi will look for a file at this path:  
**/myroot/deeper/one.inc.**
See the tests for more information. I look forward to better ideas about this.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-ssi
[npm-image]: https://badge.fury.io/js/gulp-ssi.png

[travis-url]: http://travis-ci.org/etylsarin/gulp-ssi
[travis-image]: https://secure.travis-ci.org/etylsarin/gulp-ssi.png?branch=master
