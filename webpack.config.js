const path = require('path');

module.exports = {
  entry: './src/main.jsx',
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader'], 
    },
  ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8081,
    historyApiFallback: true,
  },
  mode: 'development',
};
