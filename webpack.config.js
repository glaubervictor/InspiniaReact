const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const fs = require("fs");

const lessToJs = require("less-vars-to-js");
const theme = lessToJs(
  fs.readFileSync(path.join(__dirname, "./ant-default-vars.less"), "utf8")
);

require("babel-polyfill");

module.exports = {
  entry: ["babel-polyfill", "./src/index.jsx"],
  output: {
    path: __dirname + "/public/bundle",
    filename: "./app.js"
  },
  devServer: {
    port: 8080,
    contentBase: "./public"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        loader: "babel-loader",
        exclude: [/node_modules/],
        query: {
          presets: ["es2015", "react"],
          plugins: [
            ["transform-object-rest-spread"],
            ["import", { libraryName: "antd", style: true }]
          ]
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: theme
            }
          }
        ]
      },
      {
        test: /\.scss/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: "file-loader"
      }
    ]
  }
};
