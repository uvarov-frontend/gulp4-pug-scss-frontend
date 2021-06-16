module.exports = (gulp, plugins, browser) => {
  const config = require('../config');

  return () => gulp
    .src(config.style.src.main)
    .pipe(plugins.plumber())
    .pipe(plugins.concat('main.css'))
    .pipe(plugins.sass())
    .pipe(plugins.csscomb())
    .on('error', plugins.notify.onError(error => `Error: ${error.message}`))
    .pipe(gulp.dest(config.style.dest.main))
    .pipe(browser.stream())
};