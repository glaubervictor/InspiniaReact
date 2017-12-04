const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const fs  = require('fs')

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-default-vars.less'), 'utf8'));

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: [['transform-object-rest-spread'], ['import', { libraryName: "antd", style: true }]]
            }
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader",
                options: {
                    modifyVars: themeVariables
                }
            }]
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=100000'
        }]
    }
}