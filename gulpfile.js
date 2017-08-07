const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('sass:build', () => {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', ['sass:build'], () => {
  gulp.watch('src/**/*.scss', ['sass:build']);
});

gulp.task('serve', ['sass:build'], () => {
  browserSync.init({
    server: '.',
    open: false,
  });

  gulp.watch('src/**/*.scss', ['sass:build']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', () => {
  console.log('Use npm scripts');
});
