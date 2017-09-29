const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        build: './src/pages/main.js',
        vendor: ['vue', 'axios', 'vue-router', 'js-cookie', 'store']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name]-[chunkhash:8].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.BannerPlugin(
            new Date().getFullYear() +
            '年' +
            parseInt(new Date().getMonth() + 1, 10) +
            '月' +
            new Date().getDate() +
            '日' +
            new Date().getHours() +
            '点' +
            new Date().getMinutes() +
            '分' +
            '编译'
        ),
        new HtmlWebpackPlugin({
            template: __dirname + '/index.tpl'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new CleanWebpackPlugin(['dist'], {
            root: '',
            verbose: true,
            dry: false
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.css', '.less'],
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Utils: path.resolve(__dirname, 'src/utils'),
            Assets: path.resolve(__dirname, 'src/assets/images')
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.(png|jpg|gif|md)$/,
                use: ['url-loader?limit=10240&name=[name]-[md5:hash:base64:10].[ext]']
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?name=[name].[ext]&mimetype=application/font-woff']
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?name=[name].[ext]&mimetype=application/font-woff2']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?name=[name].[ext]&mimetype=application/font-woff2']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?name=[name].[ext]&mimetype=application/font-woff2']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10240&mimetype=image/svg+xml']
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            }
        ]
    }
};