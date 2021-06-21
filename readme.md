# Инкрементальная сборка Gulp4 с использованием препроцессора PUG и SCSS

Сборка упрощает и ускоряет процесс HTML-верстки проектов.

**Возможности:**  
+ Преобразовать шрифты из формата `.ttf` в `.woff .woff2`
+ Выгрузить собранный проект по FTP
+ Сжать изображения в формате `.png .jpg .jpeg` c помощью сервиса [TinyPNG](https://tinypng.com/)
+ Проверить валидность HTML
+ Упаковать готовый проект в `zip-архив`
+ Писать код разметки еще короче, благодаря плагину [gulp-pugbem](https://github.com/legostaev-vadim/gulp-pugbem)

## Список основных команд сборщика:

Команда | Описание
----- | -----
`gulp` `npm run start` `yarn start` | Запустить сборщик проекта и livereload.
`gulp dest` | Собрать проект "для локальной работы" в папку `project/dest`.
`gulp release` | Пересобрать проект "для публикации верстки" из папки `project/dest` в папку `project/release`.
`gulp dest.ftp` | Пересобрать проект "для публикации верстки" из папки `project/dest` в папку `project/release` и выгрузить по ftp.
`gulp dest.zip` | Пересобрать проект "для публикации верстки" из папки `project/dest` в папку `project/release` и упаковать в zip архив.
`gulp release.ftp` | Пересобрать проект "для продакшена" из папки `project/dest` в папку `project/release` и выгрузить по ftp.
`gulp release.zip` | Пересобрать проект "для продакшена" из папки `project/dest` в папку `project/release` и упаковать в zip архив.
`gulp clean` | Удалить сгенерированные файлы.
`gulp fonts` | Преобразовать шрифты в формате `.ttf` из папки `project/src/files/fonts/ttf` в формат `.woff .woff2` и поместить в папку `project/src/files/fonts`.
`gulp tinypng` | Сжать изображения в формате `.png .jpg .jpeg` из папки `project/src/img/tinypng` через сервис TinyPNG и поместить в папку `project/src/img`.
`gulp validator` | Проверить валидность HTML.

**Для запуска команды `gulp tinypng` в папке `/gulp` необходимо переименовать файл `_tinypng.json` в `tinypng.json` и отредактировать API key, получить его можно на официальном сайте [TinyPNG](https://tinypng.com/developers)**

Шаблон файла `tinypng.json`:
```json
{
  "key": "Здесь ваш API Key"
}
```
**Для запуска команды `gulp ftp` в папке `/gulp` необходимо переименовать файл `_ftpconfig.json` в `ftpconfig.json` и отредактировать все значения.**

Шаблон файла `ftpconfig.json`:
```json
{
  "host": "Имя хоста",
  "user": "Имя юзера",
  "password": "Пароль",
  "directory": "Путь к директории на хостинге"
}
```

## Миксины

Основные миксины расположены в файле `project/src/style/mixin.scss`.  
Миксины спрайтов SVG и PNG расположены в директории `project/src/style/_sprite`.  
Примеры использования миксинов:  

**Медиа-запросы:**

```scss
.example {
  .tabs {
    margin-top: 60px;
    @include mq('phone') {
      margin-top: 20px;
    }
  }
}
```

**Подключение шрифтов:**

```scss
@include font('ProximaNova', 'ProximaNova-Light', fallback, '100', 'normal');
@include font('ProximaNova', 'ProximaNova-Regular', fallback, '300', 'normal');
```

**Cпрайты PNG:**

```scss
.sprite-png {
  display: inline-block;
  @include sprite($address); // Для использования этого миксина, в папке project/src/img/_sprite/png должен лежать файл address.png
}
```

**Cпрайты SVG:**

```scss
.sprite-svg {
  font-size: 16px;
  display: inline-block;
  @include spriteSvg(address); // Для использования этого миксина, в папке project/src/img/_sprite/svg должен лежать файл address.svg

  &:hover {
    @include spriteSvg(addressHover, bg);
  }
}
```
## License

ISC License

## Author

Yuri Uvarov (*uvarov.frontend@gmail.com*)
