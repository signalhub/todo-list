'use strict';

const path = require('path');
const webpack = require('webpack');
const TextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin-extra-files');

module.exports = function(_path) {
    const appPath = path.join(_path, 'app'),
        assetsPath = path.join(appPath, 'assets'),
        relAssetsPath = path.relative('.', assetsPath);

    const aliases = {
        _app: appPath,
        _assets: assetsPath,
        _src: path.join(appPath, 'src')
    };

    // const dependencies = Object.keys(require(_path + '/package').dependencies);

    return {
        entry: {
            application: path.join(aliases._app, 'app.jsx'),
            // dependencies
        },
        output: {
            path: path.join(_path, 'dist'),
            filename: path.join('assets', 'js', '[name].bundle.[chunkhash].js'),
            chunkFilename: '[id].bundle.[chunkhash].js',
            publicPath: '',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.styl', '.css'],
            modules: ['node_modules'],
            alias: aliases,
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            }, {
                test: /\.css$/,
                loader: TextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!autoprefixer-loader',
                    publicPath: "../../"
                }),
            }, {
                test: /\.styl$/,
                loader: TextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!autoprefixer-loader!stylus-loader',
                    publicPath: "../../"
                }),
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            }, {
                test: /\.(png|ico|jpg|jpeg|gif|svg)(\?\w+)?$/i,
                loader: 'file?context=' + relAssetsPath + '&name=[path][name].[hash].[ext]',
            }, {
                test: /\.(ttf|eot|woff|woff2)(\?\w+)?$/i,
                loader: 'file?context=' + relAssetsPath + '&name=[path][name].[hash].[ext]',
            }]
        },

        plugins: [
            new webpack.DefinePlugin({
                TYPE_ENV: JSON.stringify(process.env.TYPE_ENV),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }),
            new webpack.ProvidePlugin({
                path: 'path',
                URL: 'url'
            }),
            new HtmlPlugin({
                title: 'TODO List XIM Inc',
                chunks: ['vendors', 'application'],
                filename: 'index.html',
                extraFiles: [],
                template: path.join(aliases._app, 'index.html'),
            }),
            new TextPlugin('assets/css/[name].css'),
            // new webpack.optimize.UglifyJsPlugin()
        ]
    };
};