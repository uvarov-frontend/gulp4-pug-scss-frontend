module.exports = (gulp, plugins, browser) => {
  const config = require('../config');

  return () => gulp
    .src(config.style.src.main)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('main'))
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write())
    .on('error', plugins.notify.onError(error => `Error: ${error.message}`))
    .pipe(gulp.dest(config.style.dest.main))
    .pipe(browser.stream())
};
