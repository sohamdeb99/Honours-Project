const path = require('path');

module.exports = {
  entry: './project/src/index.js', // Adjust if your entry point is different
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // This rule will handle all CSS files
        use: ['style-loader', 'css-loader'] // Use these loaders for CSS files
      },
      {
        test: /\.js$/, // Rule for JavaScript files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for JavaScript files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Ensure you include react preset if using JSX
          }
        }
      },
      // Include other rules or loaders if necessary
    ]
  }
};
