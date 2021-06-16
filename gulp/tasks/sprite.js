module.exports = (gulp, plugins, browser) => {
  const config = require('../config');
  const svgSprite = require('gulp-svg-sprite');

  return () => plugins.all(
    gulp.src(config.sprite.mixin.png).pipe(gulp.dest(config.sprite.mixin.dest)),
    gulp.src(config.sprite.png)
      .pipe(
        plugins.spritesmith({
          imgName: 'sprite.png',
          cssName: 'sprite-png.scss',
          cssVarMap(sprite) {
            sprite.name;
          },
          engineOpts: {
            imagemagick: true,
          },
          padding: 5,
          algorithm: 'binary-tree',
          imgPath: '../img/sprite.png',
          cssFormat: 'scss',
        }),
      )
      .pipe(plugins.if('*.png', gulp.dest(config.sprite.img)))
      .pipe(plugins.if('*.scss', gulp.dest(config.sprite.style)))
      .pipe(browser.stream()),

    gulp.src(config.sprite.mixin.svg).pipe(gulp.dest(config.sprite.mixin.dest)),
    gulp.src(config.sprite.svg)
      .pipe(
        svgSprite({
          shape: {
            spacing: {
              padding: 5,
            },
          },
          mode: {
            css: {
              dest: './',
              layout: 'diagonal',
              sprite: '../_sprite/img/sprite.svg',
              bust: false,
              render: {
                scss: {
                  dest: '../_sprite/style/sprite-svg.scss',
                  template: './project/src/style/_sprite/sprite-template.scss',
                },
              },
            },
          },
          variables: {
            mapname: 'icons',
          },
        }),
      )
      .pipe(gulp.dest(config.sprite.dest))
      .pipe(browser.stream())
  )
};
