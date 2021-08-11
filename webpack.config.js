// Usar o path em vez do caminho "src/index.jsx" para melhor compatibilidade com sistemas operacionais
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  // __dirname é a pasta onde esse arquivo está
  entry: path.resolve(__dirname, "src", "index.tsx"), // Arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    // Onde tá o conteúdo estático da aplicação
    contentBase: path.resolve(__dirname, "public"),
    hot: true
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ].filter(Boolean),
  module: { // Como a aplicação vai se comportar dependendo do tipo de arquivo importado
    rules: [
      {
        // Recebe uma expressão regular para saber se é um arquivo js
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel")
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  }
};