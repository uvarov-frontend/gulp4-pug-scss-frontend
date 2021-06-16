module.exports = (gulp, plugins) => {
  const config = require('../config');
  const formatHtml = require('gulp-format-html');
  const htmlValidator = require('gulp-w3c-html-validator');

  return () => gulp
    .src(config.pug.srcFile)
    .pipe(plugins.pug({
      self: true,
      cache: true,
      pretty: true
    }))
    .pipe(formatHtml())
    .pipe(htmlValidator())
};