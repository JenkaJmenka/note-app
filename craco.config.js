/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@blocks": path.resolve(__dirname, "src/blocks"),
      "@contracts": path.resolve(__dirname, "src/contracts"),
      "@store": path.resolve(__dirname, "src/store")
    },
  },
};