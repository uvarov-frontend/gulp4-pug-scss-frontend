module.exports = (gulp, plugins, browser) => {
  const config = require('../config');

  return () => gulp
    .src(config.js.src.plugins)
    .pipe(plugins.plumber())
    .pipe(
      plugins.babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(gulp.dest(config.js.dest.plugins))
    .pipe(browser.stream())
};