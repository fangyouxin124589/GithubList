const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: { filename: `bundle.[contenthash:8].js`, path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      {
        test: /\.css$/,
        // include:[path.resolve(__dirname, 'src/styles'),/node_modules/],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //  { test: /\.css$/,
      //     exclude:[path.resolve(__dirname, 'src/styles'),/node_modules/],
      //     use: ['style-loader','css-loader?modules']
      //  },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"] },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpg$/, /\.png$/, /\.svg$/],
        loader: "url-loader",
        options: { limit: 10000 },
      },
    ],
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    })
  ],
};
