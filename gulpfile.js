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

gulp.task('dest', gulp.series(
  gulp.parallel('clean'),
  gulp.parallel('sprite'),
  gulp.parallel('js.plugins', 'style.plugins'),
  gulp.parallel('js.main.temp', 'style.main'),
  gulp.parallel('files', 'img'),
  gulp.parallel('pug'),
));

gulp.task('default', gulp.series(
  gulp.parallel('dest'),
  gulp.parallel('watch', 'server'),
));

gulp.task('dest.babel', gulp.series(
  gulp.parallel('clean'),
  gulp.parallel('sprite'),
  gulp.parallel('js.plugins', 'style.plugins'),
  gulp.parallel('js.main.babel', 'style.main'),
  gulp.parallel('files', 'img'),
  gulp.parallel('pug'),
));


gulp.task('dest.final', gulp.series(
  gulp.parallel('clean'),
  gulp.parallel('sprite'),
  gulp.parallel('js.plugins', 'style.plugins'),
  gulp.parallel('js.main', 'style.main'),
  gulp.parallel('files', 'img'),
  gulp.parallel('pug'),
  gulp.parallel('html.final'),
));

gulp.task('dest.ftp', gulp.series('clean', 'dest.babel', 'release', 'ftp', 'clean'));
gulp.task('dest.zip', gulp.series('clean', 'dest.babel', 'release', 'zip', 'clean'));

gulp.task('release.ftp', gulp.series('clean', 'dest.final', 'release', 'ftp', 'clean'));
gulp.task('release.zip', gulp.series('clean', 'dest.final', 'release', 'zip', 'clean'));
