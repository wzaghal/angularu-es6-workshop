var excludeDirs=/node_modules/;


module.exports = {
  entry: ['./client/app/app.js'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: excludeDirs},
    ]
  }
};
