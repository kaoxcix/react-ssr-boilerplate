const path        = require('path');
const webpack     = require('webpack');

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
                test:    /\.(js|jsx)$/,
                exclude: /(node_modules\/)/,
                use:     [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
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
            path:       path.join(__dirname, '../public'),
            filename:   'client.js',
            publicPath: '/public/',
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings:      false,
                    screw_ie8:     true,
                    drop_console:  true,
                    drop_debugger: true
                }
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
        ]
    },
    {
        ...commonConfiguration,

        name:    'server',
        target:  'node',
        entry:   './server.jsx',
        output:  {
            path:          path.join(__dirname, '../public'),
            filename:      'server.js',
            libraryTarget: 'commonjs2',
            publicPath:    '/public/',
        },
        module:  {
            rules: [
                {
                    test:    /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use:     [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
            ],
        },
    }
];