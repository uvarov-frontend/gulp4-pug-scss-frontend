module.exports = (gulp) => {
  return () => {
    global.watch = true;
    gulp.watch(['project/src/pug/**/*.pug'], { usePolling: true }, gulp.series('pug'))
      .on('all', (event, filepath) => {
        global.changedTempalteFile = filepath.replace(/\\/g, '/');
      });
    gulp.watch(['project/src/js/main/**/**/*.js'], { usePolling: true }, gulp.series('js.main'));
    gulp.watch(['project/src/js/plugins/**/**/*.js'], { usePolling: true }, gulp.series('js.plugins'));
    gulp.watch(['project/src/style/main/**/**/*.scss'], { usePolling: true }, gulp.series('style.main'));
    gulp.watch(['project/src/style/plugins/**/**/*.scss'], { usePolling: true }, gulp.series('style.plugins'));
    gulp.watch(['project/src/img/**/**/*.*', '!project/src/img/_sprite/*.*'], { usePolling: true }, gulp.series('img'));
    gulp.watch(['project/src/files/**/**/*.*'], { usePolling: true }, gulp.series('files'));
    gulp.watch(['project/_sprite/**/*.*'], { usePolling: true }, gulp.series('img', 'style.main'));
    gulp.watch(['project/src/img/_sprite/*.*'], { usePolling: true }, gulp.series('sprite'));
  }
};