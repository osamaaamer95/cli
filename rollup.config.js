import json from "@rollup/plugin-json";
import banner from "rollup-plugin-banner";
const { preserveShebangs } = require("rollup-plugin-preserve-shebangs");

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    json(),
    banner("\nosamaaamer-cli v<%= pkg.version %>\n<%= pkg.author %>\n"),
    preserveShebangs(),
  ],
};
