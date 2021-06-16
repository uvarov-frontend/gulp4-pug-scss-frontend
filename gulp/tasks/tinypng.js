module.exports = (gulp) => {
  const config = require('../config');
  const tinypng = require('gulp-tinypng-compress');

  let tinypngkey;
  try {
    tinypngkey = require('../tinypng');
  } catch (error) { }

  return () => gulp
    .src(config.img.tinyPng.src)
    .pipe(tinypng({
      key: tinypngkey.key,
      log: true,
    }))
    .pipe(gulp.dest(config.img.tinyPng.dest));
};
