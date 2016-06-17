var $ = require('gulp-load-plugins') ();

var pkg = require('./package.json');

var gulp = require('gulp');
var del = require('del');

$.runSequence = require('run-sequence');
$.streamqueue = require('streamqueue');

gulp.task('build', function() {
  $.runSequence(
    'backupCustomConfig',
    'setDefaultConfig',
    'styles',
    'resetCustomConfig',
    'cleanupTmp'
  );
});

gulp.task('backupCustomConfig', function() {
  // move the custom config
  gulp.src('./css/_config.scss')
  .pipe($.rename('_config.scss.tmp'))
  .pipe(gulp.dest('./css/'));
});

gulp.task('setDefaultConfig', function() {
  // get the default config
  return gulp.src('./css/_config.scss.sample')
  .pipe($.rename('_config.scss'))
  .pipe(gulp.dest('./css/'));
});

gulp.task('resetCustomConfig', function() {
  // put the custom config back
  return gulp.src('./css/_config.scss.tmp')
  .pipe($.rename('_config.scss'))
  .pipe(gulp.dest('./css/'));
});

gulp.task('cleanupTmp', function() {
  return del('./css/_config.scss.tmp')
});

gulp.task('deleteCustomConfig', function() {
  return del('./css/_config.scss')
});

var sass = function () {
  return gulp.src('./css/main.scss')
  .pipe($.sass({ compress: true, sourceMap: true }))
  .on('error', $.util.log);
};

gulp.task('styles', function() {
  return $.streamqueue(
    { objectMode: true },
    gulp.src('css/normalize.css'),
    sass()
  )
  .pipe($.cssmin())
  .pipe($.header('/* supports-version:<%= pkg.ttrssVersion %> */\n\n', { pkg : pkg }))
  .pipe($.rename({ basename: 'clean-greader' }))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  var server = $.livereload();
  gulp.watch([
    './css/**/*.css'
  ], function(evt) {
    server.changed(evt.path);
  });

  gulp.watch([
    './css/**/*.scss'
  ], [
    'styles'
  ]);
});
