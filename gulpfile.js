const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('dist'))
}

function buildScript() {
  return src('js/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename((path)=>{
      path.basename += ".min";
    }))
    /* .pipe(concat('index.min.js')) */
    .pipe(dest('dist'))
}

function watchTask() {
  watch(['sass/**/*.scss', 'js/**/*.js', '*.html'], series(buildStyles, buildScript));
}

exports.default = series(buildStyles, buildScript, watchTask);