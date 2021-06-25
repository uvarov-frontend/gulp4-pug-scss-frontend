module.exports = (gulp, plugins, browser) => {
  const config = require('../config');

  return () => browser.init({
    server: {
      baseDir: config.dir.dest,
    },
    port: 8080,
    open: true,
    notify: false,
    // tunnel: 'uvarov-frontend-odds'
  });
};
