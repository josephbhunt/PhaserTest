var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open')

gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 9000,
    livereload: true,
    host: '0.0.0.0',
  });
});

gulp.task('open', function () {
  gulp.src('./index.html')
    .pipe(open({
      uri: 'http://localhost:9000'
    }));
});

gulp.task('watch', function () {
  gulp.watch(['./app/*']);
});

gulp.task('default', ['connect', 'open', 'watch']);
