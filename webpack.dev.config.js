const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config');

base.output.publicPath = '/dist/dev/';
base.plugins.push(
  	new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
);
module.exports = base
