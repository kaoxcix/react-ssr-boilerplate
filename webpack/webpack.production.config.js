const Path              = require('path');
const Webpack           = require('webpack');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PUBLIC_PATH = '/public/';

// Common Configuration
const commonConfiguration = () => ({
    context: Path.resolve(__dirname, '..', 'src'),
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:      {
            Api:        Path.resolve(__dirname, '..', 'src', 'api'),
            Components: Path.resolve(__dirname, '..', 'src', 'components'),
            Containers: Path.resolve(__dirname, '..', 'src', 'containers'),
            Constants:  Path.resolve(__dirname, '..', 'src', 'constants'),
            Utilities:  Path.resolve(__dirname, '..', 'src', 'utilities'),
            Images:     Path.resolve(__dirname, '..', 'src', 'public', 'images'),
            Src:        Path.resolve(__dirname, '..', 'src'),
        },
    },
    devtool: 'cheap-module-source-map',
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
            },
        ],
    },
});

// Client Configuration
const clientConfig = {
    ...commonConfiguration(),

    name:   'client',
    target: 'web',
    entry:  './client.jsx',
    output: {
        path:       Path.resolve(__dirname, '..', 'dist', 'public'),
        filename:   'client.js',
        publicPath: PUBLIC_PATH,
    },

    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                    warnings:      false,
                    drop_console:  true,
                    drop_debugger: true
                },
            }
        }),
        new Webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('bundle.css'),
    ]
};

clientConfig.module.rules.push({
    test: /\.(css|scss|sass)$/,
    use:  ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use:      [
            {
                loader:  'css-loader',
                options: {
                    importLoaders: 1,
                    minimize:      true
                }
            },
            'postcss-loader?sourceMap',
            'sass-loader?sourceMap',
        ],
    }),
});


// Server Configuration
const serverConfig = {
    ...commonConfiguration(),

    name:   'server',
    target: 'node',
    entry:  './server.jsx',
    output: {
        path:          Path.join(__dirname, '..', 'dist'),
        filename:      'server.js',
        libraryTarget: 'commonjs2',
        publicPath:    PUBLIC_PATH,
    },

    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ],
};

serverConfig.module.rules.push({
    test: /\.(css|scss|sass)$/,
    use:  [
        {
            loader:  'css-loader',
            options: {
                importLoaders: 1,
                minimize:      true
            }
        },
        'postcss-loader?sourceMap',
        'sass-loader?sourceMap',
    ],
});

module.exports = [
    clientConfig,
    serverConfig,
];