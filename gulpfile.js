const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => {
  del([
    'build',
    'static',
    'asset-manifest.json',
    '*.ico',
    '*.html',
    'manifest.json',
    'service-worker.js',
  ]);
});

gulp.task('move', () => {
  return gulp.src('build/**').pipe(gulp.dest('.'));
});
