var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');

gulp.task('build', function() {
  runSequence(
    'backupConfig',
    'setDefaultConfig',
    'sass',
    'setTempConfig'
  );
});

gulp.task('backupConfig', function() {
  // move the custom config
  gulp.src('./css/_config.scss')
  .pipe(clean())
  .pipe(rename('_config.scss.tmp'))
  .pipe(gulp.dest('./css/'));
});

gulp.task('setDefaultConfig', function() {
  // get the default config
  return gulp.src('./css/_config.scss.sample')
  .pipe(rename('_config.scss'))
  .pipe(gulp.dest('./css/'));
});

gulp.task('setTempConfig', function() {
  // put the custom config back
  return gulp.src('./css/_config.scss.tmp')
  .pipe(clean())
  .pipe(rename('_config.scss'))
  .pipe(gulp.dest('./css/'));
});

gulp.task('sass', function() {
  return gulp.src('./css/main.scss')
  .pipe(sass({ compress: true, sourceMap: true }))
  .on('error', gutil.log)
  .pipe(gulp.dest('./css/'));
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