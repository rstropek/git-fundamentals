const { src, dest, parallel, series, watch } = require('gulp');
const del = require('del');
const path = require('path');
const ssi = require('gulp-ssi');
const lec = require('gulp-line-ending-corrector');

function clean() {
  return del(['dist/**']);
}

function copyReveal() {
  const rbase = 'node_modules/reveal.js';
  return src(
          [
            path.join(rbase, 'dist/**/*.css'), 
            path.join(rbase, 'dist/**/*.js'), 
            path.join(rbase, 'plugin/**/*'),
            path.join(rbase, 'dist/theme/**/*'),
          ],
          {base: rbase})
      .pipe(dest('dist'));
}

function copyHtml() {
  return src('content/**/*.html').pipe(ssi()).pipe(dest('dist'));
}

function copyMarkdown(cb) {
  return src(['content/**/*'])
    .pipe(ssi())
    .pipe(lec())
    .pipe(dest('dist'));
}

const defaultTasks = series(parallel(copyHtml, copyMarkdown), copyReveal);

exports.clean = clean;
exports.default = defaultTasks;

exports.watch = function() {
  watch(
      ['content/*.html', 'content/*.md'],
      { ignoreInitial: false },
      defaultTasks);
}
