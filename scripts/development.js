const
    // required modules
    express                      = require('express')
    , path                       = require('path')
    , app                        = express()
    , webpack                    = require('webpack')
    , webpackDevMiddleware       = require('webpack-dev-middleware')
    , webpackHotMiddleware       = require('webpack-hot-middleware')
    , webpackHotServerMiddleware = require('webpack-hot-server-middleware')
    , config                     = require('../webpack/webpack.development.config.js')
    , compiler                   = webpack(config)

    // configuration
    , serverHostname             = '0.0.0.0'
    , serverPort                 = '3000'
    , publicPath                 = '/public'
;

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use(webpackDevMiddleware(
    compiler,
    {
        noInfo: true,
        publicPath: publicPath,
    }
));

app.use(webpackHotMiddleware(
    compiler.compilers.find(
        compiler => compiler.name === 'client'
    )
));

app.use(
    webpackHotServerMiddleware(compiler)
);

app.listen(serverPort, serverHostname, function (err) {
    if (err) {
        console.log(err.message)
    } else {
        let hostname = this.address().address;
        let port     = this.address().port;
        console.log(`\x1b[36m%s\x1b[0m`, `Server is listening on http://${hostname}:${port}`);
    }
});