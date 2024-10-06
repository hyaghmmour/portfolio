const path = require('path');

// Detect environment (production or development)
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  // Mode (either 'development' or 'production')
  mode: isProduction ? 'production' : 'development',
  
  // Entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Output directory for the bundle
  },

  // Devtool setting based on environment
  devtool: isProduction ? false : 'eval-source-map',

  // Module rules for how to handle different file types
  module: {
    rules: [
      {
        test: /\.js$/,              // For JavaScript files
        exclude: /node_modules/,     // Exclude node_modules folder
        use: {
          loader: 'babel-loader',    // Use Babel to transpile ES6+ to ES5
          options: {
            presets: ['@babel/preset-env'] // Babel preset for modern JS features
          }
        }
      },
    ],
  },

  // Webpack development server configuration (for local development)
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};