/*
 * @Author: gitboyzcf boyzcf@qq.com
 * @Date: 2023-12-20 09:48:31
 * @LastEditors: gitboyzcf boyzcf@qq.com
 * @LastEditTime: 2023-12-20 10:21:01
 * @FilePath: \project-group\webpack-demo\webpack.config.js
 */
const path = require("path");

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
