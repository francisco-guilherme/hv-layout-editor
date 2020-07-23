// production config
const { resolve } = require("path");
const merge = require("webpack-merge");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "js/bundle.[hash].min.js",
    path: resolve(__dirname, "../../build"),
    publicPath: "./"
  },
  devtool: "source-map",
  plugins: []
});
