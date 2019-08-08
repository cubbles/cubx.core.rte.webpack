const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const IgnorePlugin = require('webpack').IgnorePlugin
const path = require('path');
const wpkgUtils = require('@cubbles/wpkg-utils');
const webpackageName = wpkgUtils.getWebpackageName;
const elementName = webpackageName + '-' + __dirname.split(path.sep).pop();
const distFolder = path.resolve(__dirname, global.cubx.distFolderWebpackage, elementName);

const config = {
  // make this configuration independent from the current working directory
  context: path.resolve(__dirname),
  // define the entry module for the bundle to be created
  entry: `./main.js`,
  output: {
    path: distFolder,
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        // manage placeholdes in js files
        test: /\.js$/,
        use: [
          { loader: `preprocess-loader?elementName=${elementName}` }
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundleReport.html',
      openAnalyzer: false
    }),
    new IgnorePlugin(/vertx/)
  ]
};
module.exports = config;
