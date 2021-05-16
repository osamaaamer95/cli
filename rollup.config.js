import json from "@rollup/plugin-json";
import banner from "rollup-plugin-banner";
const { preserveShebangs } = require("rollup-plugin-preserve-shebangs");
import bundleSize from "rollup-plugin-bundle-size";
import analyze from "rollup-plugin-analyzer";

import { name, version } from "./package.json";

import chalk from "chalk";
import boxen from "boxen";

const greeting = chalk.white.bold(`Building ${name}@v${version}`);

const boxenOptions = {
  padding: 1,
  margin: 0.25,
  borderStyle: "round",
  borderColor: "cyan",
};

const buildHeader = boxen(greeting, boxenOptions);
console.log(buildHeader);

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
    analyze(),
    bundleSize(),
  ],
};
