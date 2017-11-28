const
    // required modules
    express              = require('express')
    , path               = require('path')
    , app                = express()
    , clientStatsPath    = path.join(__dirname, '../public/stats.json')
    , serverRendererPath = path.join(__dirname, '../public/server.js')
    , serverRenderer     = require(serverRendererPath).default
    , stats              = require(clientStatsPath)

    // configuration
    , serverHostname     = '0.0.0.0'
    , serverPort         = '8000'
;

app.use('/public', express.static(path.join(__dirname, '../public')))

app.use(serverRenderer(stats));


app.listen(serverPort, serverHostname, function () {
    let hostname = this.address().address;
    let port     = this.address().port;
    console.log(`Server is listening on http://${hostname}:${port}`);
});