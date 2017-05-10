import {resolve} from 'path'

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
    contentBase: sourcePath,
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
    ],
  },
}