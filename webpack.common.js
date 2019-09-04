/* global require module __dirname */

const libraryFileName = 'ample-alerts';
const libraryName = 'ampleAlerts';

const sourceDir = 'src';
const outputDir = 'build';

const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const clean = new CleanWebpackPlugin([outputDir]);
const extractCSSLight = new ExtractTextPlugin('styles/' + libraryFileName + '.light.css');
const extractCSSDark = new ExtractTextPlugin('styles/' + libraryFileName + '.dark.css');
const optimizeCSS = new OptimizeCssAssetsPlugin();

module.exports = {
    mode: 'development',
    entry: {
        [libraryFileName]: `./${sourceDir}/scripts/simple.js`,
        [`${libraryFileName}.promises`]: `./${sourceDir}/scripts/with-promises.js`
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: '../'
                    }
                }
            },
            {
                test: /light\.(less|css)$/,
                use: extractCSSLight.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /dark\.(less|css)$/,
                use: extractCSSDark.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        clean,
        extractCSSLight,
        extractCSSDark,
        optimizeCSS
    ],
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, outputDir),
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};
