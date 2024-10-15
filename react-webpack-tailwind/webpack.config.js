const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Rule mới cho các tệp ảnh
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm|ogg)$/i, // Rule cho file video
        type: "asset/resource", // Xử lý file video tương tự như hình ảnh
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true, // kích hoạt nén
    port: 3000, // chọn cổng chạy server
    open: true, // tự động mở trình duyệt
    hot: true, // kích hoạt hot reload
  },
};
