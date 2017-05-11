import {resolve} from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const sourcePath = resolve(__dirname, 'source')

export default {
  entry: sourcePath,
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  devServer: {
    port: 4000,
    historyApiFallback: true,
    // contentBase: sourcePath,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(woff2|woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'base64-font-loader'
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
}