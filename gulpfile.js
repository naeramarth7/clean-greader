var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./css/main.scss')
    .pipe(sass({
      compress: true,
      sourceMap: true
    }))
    .on('error', gutil.log)
    .pipe(
      gulp.dest('./css/')
  );
});

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch([
    './css/**/*.css'
  ], function(evt) {
    server.changed(evt.path);
  });

  gulp.watch([
    './css/**/*.scss'
  ], [
    'sass'
  ]);
});