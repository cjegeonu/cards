import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: {
    index: './index.js',
  },
  mode: "development",
  output: {
    filename: '[name].mjs',
    path: '/lib',
    clean: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(css)?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  './index.html',
    })
  ],
  devServer: {
    static: {
      directory: 'build',
    },
    port: 8000,
  },
};