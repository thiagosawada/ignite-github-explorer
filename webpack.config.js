// Usar o path em vez do caminho "src/index.jsx" para melhor compatibilidade com sistemas operacionais
const path = require("path");

module.exports = {
  // __dirname é a pasta onde esse arquivo está
  entry: path.resolve(__dirname, "src", "index.jsx"), // Arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
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