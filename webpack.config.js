const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: isDev && 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public/')
  },
  stats: 'minimal',
  entry: './src/js/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [],
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: true
    }),
    new StyleLintPlugin({
      files: './src/scss/**/*.scss',
      syntax: 'scss'
    })
  ]
};

if (!isDev) {
  module.exports.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css'
    })
  );
}
