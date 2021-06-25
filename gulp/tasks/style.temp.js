module.exports = (gulp, plugins, browser) => {
  const config = require('../config');

  return () => gulp
    .src(config.style.src.temp)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(config.style.dest.temp))
    .pipe(browser.stream())
};
