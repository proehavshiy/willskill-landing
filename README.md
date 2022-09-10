# Верстка лендинга для WillSkill


<br />

[Посмотреть деплой](https://proehavshiy.github.io/willskill-landing/)
<br/>

<img width="300px" src="https://raw.githubusercontent.com/proehavshiy/forgifs/main/landing.png" alt="preview">

<br/>

## Как сверстано:
* `gulp` для сборки
  * конвертер шрифтов в woff-формат
  * конвертер картинок в webp-формат
  * webpack для обработки js-файлов
  * компилятор scss в css
  * автодобавление вендорных префиксов
  * минификация html, css и js
  * и т.д.
* `SCSS` - переменные, миксины
* `БЭМ` - нейминг классов
* `Flex` -  для верстки малых элементов типа карточки
* `Grid` -  для верски сеток
* `rem, vw, vh, calc` -  динамические размеры для централизованного контроля за размерами и пропорциями
* `Резиновые размеры шрифтов` -  для плавной адаптации к размерам экрана
* `Семантические теги` - для семантической верстки
* `Оптимизация и сжатие картинок и по возможности конвертация в webp` - для оптимального веса
* `Резиновая и адаптивная верстка от 1440 до 320` - для адаптации к различным экранам
* `Бургер-меню` - для мобильных и планшетных версий экранов
* `Состояния наведения` - для лучшего UX
* `блоки проверены на переполнение контента` - для более универсального использования в дальнейшем

## ТЗ
* [Figma](https://www.figma.com/file/o8KBWl9zTNrwOHNuUknXbz/Test)

## Команды:
* clone branch with `git@github.com:proehavshiy/willskill-landing.git`
* `npm run build` - build project
* `npm run dev` - run dev mode
* `npm run deploy` - deploy the project to gh-pages
* `npm run zip` - to archive the project
