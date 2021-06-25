const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browser = require('browser-sync');

const fs = require('fs');
const taskFolder = './gulp/tasks';

const getTask = task => require(`${taskFolder}/${task}`)(gulp, plugins, browser);

fs.readdirSync(taskFolder).forEach(file => {
  let taskName = file.replace('.js', '');
  gulp.task(taskName, getTask(taskName));
});

gulp.task('temp', gulp.series(
  gulp.parallel('js.temp', 'style.temp')
));

gulp.task('dest', gulp.series(
  gulp.parallel('sprite'),
  gulp.parallel('js.plugins', 'style.plugins'),
  gulp.parallel('js.main', 'style.main'),
  gulp.parallel('files', 'img'),
  gulp.parallel('pug')
));

gulp.task('default', gulp.series(
  gulp.parallel('clean'),
  gulp.parallel('temp'),
  gulp.parallel('dest'),
  gulp.parallel('watch', 'server')
));

gulp.task('dest.ftp', gulp.series('clean', 'dest', 'temp', 'release', 'ftp', 'clean'));
gulp.task('dest.zip', gulp.series('clean', 'dest', 'temp', 'release', 'zip', 'clean'));

gulp.task('release.ftp', gulp.series('clean', 'dest', 'release', 'ftp', 'clean'));
gulp.task('release.zip', gulp.series('clean', 'dest', 'release', 'zip', 'clean'));
