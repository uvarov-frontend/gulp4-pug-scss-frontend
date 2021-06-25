module.exports = (gulp, plugins, browser) => {
  const config = require('../config');
  const formatHtml = require('gulp-format-html');
  const emitty = require('emitty').setup(config.pug.src, 'pug');
  const pugbem = require("../plugins/pugbem.js");
  pugbem.b = true;

  return () => new Promise((resolve, reject) => {
    emitty.scan(global.emittyChangedFile).then(() => {
      gulp.src(config.pug.srcFile)
        .pipe(plugins.if(global.watch, emitty.filter(global.emittyChangedFile)))
        .pipe(plugins.plumber())
        .pipe(plugins.pug({
          self: true,
          cache: true,
          pretty: true,
          plugins: [pugbem],
        }))
        .pipe(plugins.inject(gulp.src(config.inject.src.temp, { read: false }), { ignorePath: config.inject.remove, relative: true, starttag: '<!-- inject:temp:{{ext}} -->' }))
        .pipe(plugins.inject(gulp.src(config.inject.src.pluginsHead, { read: false }), { ignorePath: config.inject.remove, relative: true, starttag: '<!-- inject:pluginsHead:{{ext}} -->' }))
        .pipe(plugins.inject(gulp.src(config.inject.src.plugins, { read: false }), { ignorePath: config.inject.remove, relative: true, starttag: '<!-- inject:plugins:{{ext}} -->' }))
        .pipe(plugins.inject(gulp.src(config.inject.src.main, { read: false }), { ignorePath: config.inject.remove, relative: true }))
        .pipe(formatHtml())
        .on('error', plugins.notify.onError(error => `Error: ${error.message}`))
        .pipe(gulp.dest(config.dir.dest))
        .on('end', resolve)
        .on('error', reject)
        .pipe(browser.stream());
    });
  });
};
