# adaro-noKraken-example

Using internationalization in modules outside Kraken.

## Adaro within express

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

## i18n email

- `npm install --save nodemailer`
- Modifying `app.js`'s routes (see CHANGE3 comments)
- Creating email templates `views/email/html.dust` and `views/email/plaintext.dust` and corresponding locales
- Modifying `route/email.js` for nodemailer integration, see [this list of supported services](https://github.com/andris9/nodemailer-wellknown#supported-services) and modify the file with your own email credentials.

## What's next?

How to render the template outside of a request?
