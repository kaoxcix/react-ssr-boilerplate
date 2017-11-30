const
    // required modules
    express              = require('express')
    , path               = require('path')
    , app                = express()
    , serverRendererPath = path.join(__dirname, '..', 'dist', 'server.js')
    , serverRenderer     = require(serverRendererPath).default

    // configuration
    , serverHostname     = '0.0.0.0'
    , serverPort         = '8000'
;

app.use('/public', express.static(path.join(__dirname, '..', 'dist', 'public')));

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