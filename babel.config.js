module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", {
      // Para não ter que usar import React from "react"
      runtime: "automatic"
    }],
  ]
};