// Usar o path em vez do caminho "src/index.jsx" para melhor compatibilidade com sistemas operacionais
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // __dirname é a pasta onde esse arquivo está
  entry: path.resolve(__dirname, "src", "index.jsx"), // Arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    // Onde tá o conteúdo estático da aplicação
    contentBase: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ],
  module: { // Como a aplicação vai se comportar dependendo do tipo de arquivo importado
    rules: [
      {
        // Recebe uma expressão regular para saber se é um arquivo js
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ],
  }
};