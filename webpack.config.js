let path = require('path');
let webpack = require('webpack');
// let ExtractTextPlugin = require('extract-text-webpack-plugin');
let StyleLintPlugin = require('stylelint-webpack-plugin');
let autoprefixer = require('autoprefixer');

// let cssProd = ExtractTextPlugin.extract({
//     disable: true,
//     fallback: 'style-loader',
//     use: [
//         {
//             loader: 'css-loader',
//             options: {
//                 url: false,
//                 minimize: true,
//                 sourceMap: true
//             }
//         },
//         {
//             loader: 'postcss-loader',
//             options: {
//                 plugins() {
//                     return autoprefixer({
//                         browsers: 'last 2 versions'
//                     });
//                 },
//                 sourceMap: true
//             }
//         },
//         {
//             loader: 'sass-loader',
//             options: {
//                 sourceMap: true
//             }
//         }
//     ]
// });

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        compress: true,
        stats: 'errors-only',
        watchContentBase: true,
    },
    devtool: 'source-map',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            minimize: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins() {
                                return autoprefixer({
                                    browsers: 'last 2 versions'
                                });
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        // new ExtractTextPlugin('style.css'),
        new StyleLintPlugin({
            files: './src/sass/**/*.scss',
            syntax: 'scss'
        }),
    ]
};
