# adaro-noKraken-example
Using internationalization in modules outside Kraken.

## How this was done

- `npm install express-generator -g` to install [express-generator](http://expressjs.com/starter/generator.html) (if not already done)
- `express` inside the directory
- `npm install` to install dependencies
- `npm uninstall --save jade`: making room for dust
- `npm install --save adaro` to install the dust engine
- Creating basic .dust templates in `views/` and removing jade templates
- Modifying `app.js` with adaro (see CHANGE comments)
