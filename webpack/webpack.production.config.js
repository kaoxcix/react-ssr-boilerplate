const path    = require('path');
const webpack = require('webpack');

const PUBLIC_PATH = '/public/';

const commonConfiguration = {
    context: path.resolve(__dirname, '..', 'src'),
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:      {
            Api:        path.resolve(__dirname, '..', 'src', 'api'),
            Components: path.resolve(__dirname, '..', 'src', 'componennts'),
            Containers: path.resolve(__dirname, '..', 'src', 'containers'),
            Utilities:  path.resolve(__dirname, '..', 'src', 'utilities'),
            Images:     path.resolve(__dirname, '..', 'src', 'public', 'images'),
            Src:        path.resolve(__dirname, '..', 'src'),
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
                ],
            },
            {
                test: /\.(gif|ico|jpg|jpeg|png|svg|webp)$/,
                use:  [
                    {
                        loader:  'url-loader',
                        options: {
                            limit: 8000,
                            name:  "/images/[hash].[ext]"
                        }
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
            path:       path.join(__dirname, '..', 'dist', 'public'),
            filename:   'client.js',
            publicPath:  PUBLIC_PATH,
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

        name:   'server',
        target: 'node',
        entry:  './server.jsx',
        output: {
            path:          path.join(__dirname, '..', 'dist'),
            filename:      'server.js',
            libraryTarget: 'commonjs2',
            publicPath:    PUBLIC_PATH,
        },
    }
];