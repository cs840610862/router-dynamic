/**
 * Webpack Dev Server
 * This file is used to run our local enviroment
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');

/**
 * Always dev enviroment when running webpack dev server
 * There are other ways to do this, so feel free to do
 * whatever you find suites your taste
 */

const devServerConfig = {
  contentBase: path.join(__dirname, '../src/'),
  stats: { colors: true } // Pretty colors in console
};

const server = new WebpackDevServer(webpack(webpackConfig), devServerConfig);

server.listen(8000, 'localhost');
