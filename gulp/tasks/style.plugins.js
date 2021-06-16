module.exports = (gulp, plugins, browser) => {
  const config = require('../config');

  return () => gulp
    .src(config.style.src.plugins)
    .pipe(plugins.plumber())
    .pipe(plugins.sass())
    .pipe(plugins.csscomb())
    .pipe(gulp.dest(config.style.dest.plugins))
    .pipe(browser.stream())
};