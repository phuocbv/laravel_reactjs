var path = require('path');

var config = {
    context: path.join(__dirname, 'public'),
    entry: './js/main.js',
    output: {
      path: __dirname + '/public/js/',
      filename: 'index.js',
    },
  //  devServer: {
  //     inline: true,
  //     port: 8080
  //  },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
        }]
    }
}
module.exports = config;
