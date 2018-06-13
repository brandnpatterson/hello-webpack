let devMode = process.env.NODE_ENV !== 'production'
let autoprefixer = require('autoprefixer')
let htmlTitle = 'Hello Webpack'
let path = require('path')
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
let HtmlWebpackPlugin = require('html-webpack-plugin')
let StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, '/public/'),
        compress: true,
        open: true,
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    'sass-loader'
                ]
            }
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new StyleLintPlugin({
            files: './src/scss/**/*.scss',
            syntax: 'scss'
        }),
    ]
}
