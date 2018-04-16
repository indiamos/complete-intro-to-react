const path = require('path');

module.exports = {
  context: __dirname, // everything's relative to the current project directory
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map', // inline all of my sourcemaps into my bundled code; makes code much bigger on dev but won't be included on prod; lets your errors show the pre-transpiled code, so you can actually read it.
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // the order in which it will look for files, when you don't include an extension in a `require`
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // must end in .js or .jsx
        loader: 'babel-loader', // or loaders: [ 'babel-loader' ]
      },
    ],
  },
};
