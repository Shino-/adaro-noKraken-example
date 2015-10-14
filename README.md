# adaro-noKraken-example

Using internationalization in modules outside Kraken.

## The basics

- `npm install express-generator -g` to install [express-generator](http://expressjs.com/starter/generator.html) (if not already done)
- `express` inside the directory
- `npm install` to install dependencies
- `npm uninstall --save jade`: making room for dust
- `npm install --save adaro` to install the dust engine
- Creating basic .dust templates in `views/` and removing jade templates
- Modifying `app.js` with adaro (see CHANGE comments)

## i18n with .properties file

- `npm install --save makara`
- `npm install --save dust-makara-helpers`
- `npm install --save express-bcp47` to add a middleware that sets req.locale ([see makara tutorial](http://krakenjs.com/makara))
- Creating `locales/` with subfolders containing .properties
- Modifying `app.js` with makara and bcp47 (see CHANGE2 comments)