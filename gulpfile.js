
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify', () => {
//   return gulp.src('public/*.html')
   return gulp.src(['public/*.html','public/*.xml' ])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});
