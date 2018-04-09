const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        compress: true,
        port: 3000,
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
                use: [{
                    loader: 'babel-loader',
                    loader: 'eslint-loader',
                    options: {
                        presets: 'env'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
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
                                        browsers: 'last 3 versions'
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
                })
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new StyleLintPlugin({
            files: './src/sass/**/*.scss',
            syntax: 'scss'
        }),
    ]
};
