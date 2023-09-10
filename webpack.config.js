const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      {
        test: /\.jpeg$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      //{
      //  test: /\.html$/i,
      //  loader: "html-loader",
      //  options: {
      //    minimize: true,
      //  },
      //},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
  },
};
