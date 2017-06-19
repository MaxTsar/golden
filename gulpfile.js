const   gulp = require('gulp'),
        less = require('gulp-less'),
        autoprefixer = require('gulp-autoprefixer'),
        livereload = require('gulp-livereload'),
        connect = require('gulp-connect'),
        concatCSS = require('gulp-concat-css'),
        cleanCSS = require('gulp-clean-css');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./js/*.js')
    .pipe(connect.reload());
});

gulp.task('css', function() {
    return gulp.src('less/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(concatCSS('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./*.html', ['html']);
    gulp.watch('less/*.less', ['css']);
    gulp.watch('js/*.js', ['js']);
});

gulp.task('default', ['connect', 'watch']);