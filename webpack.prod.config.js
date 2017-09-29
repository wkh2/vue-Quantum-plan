const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config');

base.output.publicPath = '/dist/build/';
// add webpack plugins
base.plugins.push(
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        comments: false,
        sourceMap: false,
        compress: {
            drop_debugger: true,
            drop_console: true
        }
    })
)
module.exports = base