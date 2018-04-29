let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let StyleLintPlugin = require('stylelint-webpack-plugin');
let autoprefixer = require('autoprefixer');
let isProd = process.env.NODE_ENV === 'production';
let htmlTitle = 'Hello Webpack';

let cssDev = [
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
];

let cssProd = ExtractTextPlugin.extract({
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
});

let cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, '/public/'),
        compress: true,
        stats: 'errors-only',
        watchContentBase: true,
    },
    devtool: 'source-map',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: 'bundle.js',
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
                use: cssConfig
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            filename: 'index.html',
            hash: true,
            template: path.join(__dirname, '/src/') + 'template.html',
            title: htmlTitle,
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: !isProd
        }),
        new StyleLintPlugin({
            files: './src/sass/**/*.scss',
            syntax: 'scss'
        }),
    ]
};
