const
    // required packages
    express              = require('express')
    , path               = require('path')
    , app                = express()
    , serverRendererPath = path.join(__dirname, 'server.js')
    , serverRenderer     = require(serverRendererPath).default

    , i18nextMiddleware          = require('i18next-express-middleware')
    , i18n                       = require('./i18n.js')

    // configuration
    , serverHostname     = '0.0.0.0'
    , serverPort         = '9001'
;

app.use('/public', express.static(path.join(__dirname, '..', 'dist', 'public')));

i18n
    .use(i18nextMiddleware.LanguageDetector)
    .init({});

app.use(i18nextMiddleware.handle(i18n));

app.use(serverRenderer());

app.listen(serverPort, serverHostname, function (err) {
    if(err) {
        console.log(err.message)
    } else {
        let hostname = this.address().address;
        let port     = this.address().port;
        console.log(`Server is listening on http://${hostname}:${port}`);
    }
});