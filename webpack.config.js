const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    watchContentBase: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: [/\.m?js$/, /\.jsx?$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env' ,'@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ] 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};