const gulp = require('gulp');
const mocha = require('mocha');

gulp.task('test', () => {
  gulp
    .src('./tests/*.js')
    .pipe(mocha())
    .on('error', err => this.emit('end'));
});

gulp.task('watch', () => {
  gulp.watch('./*.js', ['test']);
});
