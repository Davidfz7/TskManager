const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const scssRules = {
  test: /\.scss$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};
const cssRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']

}
const fileRules = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loader: "file-loader",
};

const jsxRules = {
  test: /\.jsx$/,
  loader: "babel-loader",
  options: {
    presets: [["@babel/preset-react", { runtime: "automatic" }]],
  },
};

const jsxEntry = "./src/index.jsx"; // Una sola entrada

const loadersRules = [scssRules, jsxRules, fileRules, cssRules];

module.exports = {
  entry: jsxEntry, // Solo una entrada
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./templates/index.html" })],
  module: { rules: loadersRules },
  devServer:{
      port: 9000
  }  
};
