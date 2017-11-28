const path = require('path');

const commonConfiguration = {
    context: path.resolve(__dirname, '../src'),
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:      {
            Api:        './api',
            Components: './componennts',
            Containers: './containers',
            Utilities:  './utilities',
            Src:        './',
        },
    },
    devtool: 'source-map',
    module:  {
        rules: [
            {
                test:    /\.(jsx)$/,
                exclude: /(node_modules\/)/,
                use:     [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ],
    },
};

module.exports = [
    {
        ...commonConfiguration,

        name:   'client',
        target: 'web',
        entry:  './client.jsx',
        output: {
            path:       path.join(__dirname, 'public'),
            filename:   'client.js',
            publicPath: '/public/',
        },


    },
    {
        ...commonConfiguration,

        name:   'server',
        target: 'node',
        entry:  './server.jsx',
        output: {
            path:          path.join(__dirname, 'public'),
            filename:      'server.js',
            libraryTarget: 'commonjs2',
            publicPath:    '/public/',
        },
    }
];