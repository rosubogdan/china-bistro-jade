var gulp = require('gulp');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var browserSync = require('browser-sync').create();

gulp.task('jade', function() {
	gulp.src('./src/**/*.jade')
	.pipe(jade({
		pretty:true
	}))
	.pipe(gulp.dest('./dist'))
});

gulp.task('coffee', function() {
  gulp.src('./src/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch',function() {
	gulp.watch('./src/**/*.jade', ['jade'])
	gulp.watch('./src/**/*.coffee', ['coffee'])
});

// gulp.task('serve', function() {
//
//     browserSync.init({
//         server: "./src"
//     });
//
//     gulp.watch('./src/**/*.jade', ['jade'])
//   	gulp.watch('./src/**/*.coffee', ['coffee'])
//     gulp.watch("dist/**/*.html").on('change', browserSync.reload);
// });

gulp.task('default', ['jade','coffee','watch']);
