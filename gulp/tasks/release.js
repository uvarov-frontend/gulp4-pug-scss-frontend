module.exports = (gulp, plugins) => {
  const config = require('../config');
  const htmlmin = require('gulp-html-minifier');
  const formatHtml = require('gulp-format-html');

  return () => plugins.all(
    // html
    gulp
      .src(config.release.html.src)
      .pipe(plugins.plumber())
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
      .pipe(formatHtml())
      .pipe(gulp.dest(config.release.html.dest)),
    // js
    gulp
      .src(config.release.js.src)
      .pipe(plugins.plumber())
      .pipe(gulp.dest(config.release.js.dest)),
    // style
    gulp
      .src(config.release.style.src)
      .pipe(plugins.plumber())
      .pipe(plugins.cssmin())
      .pipe(plugins.cssbeautify())
      .pipe(gulp.dest(config.release.style.dest)),
    // img
    gulp
      .src(config.release.img.src)
      .pipe(gulp.dest(config.release.img.dest)),
    // files
    gulp.src(config.release.files.src).pipe(gulp.dest(config.release.files.dest)),
    // temp
    gulp.src(config.release.temp.src).pipe(gulp.dest(config.release.temp.dest)),
  )
};
