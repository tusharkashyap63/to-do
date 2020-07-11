const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Injects styles into DOM
          'css-loader', // 2. Turns css into js
          'sass-loader', // 1. Turns sass into css
        ],
      },
    ],
  },
};
