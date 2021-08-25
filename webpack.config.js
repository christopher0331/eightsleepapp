const path = require('path');

module.exports = {
  entry: './Client/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

    ]
  }
}; 
