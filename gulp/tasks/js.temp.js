module.exports = (gulp, plugins, browser) => {
  const config = require('../config');

  return () => gulp
    .src(config.js.src.temp)
    .pipe(plugins.plumber())
    .pipe(gulp.dest(config.js.dest.temp))
    .pipe(browser.stream())
};
