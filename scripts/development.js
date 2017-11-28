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
    , port                       = 3000
    , publicPath                 = '/public/'
;

app.use(webpackDevMiddleware(
    compiler,
    {
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

app.listen(port);