module.exports = (gulp) => {
  const config = require('../config');
  const ftp = require('vinyl-ftp');

  let ftpconfig;
  try {
    ftpconfig = require('../ftpconfig');
  } catch (error) { }

  return () => gulp
    .src(config.ftp.src, {
      buffer: false,
    })
    .pipe(ftp.create({
      host: ftpconfig.host,
      user: ftpconfig.user,
      password: ftpconfig.password,
    })
      .dest(ftpconfig.directory),
    );
};
