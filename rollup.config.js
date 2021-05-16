import typescript from "@rollup/plugin-typescript";

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from "@rollup/plugin-node-resolve";
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

function getPlugins(config) {
  const basePlugins = [
    nodeResolve({
      browser: false,
    }),
    commonjs(),
    typescript({
      module: "ESNext",
    }),
    json(),
    banner("\nosamaaamer-cli v<%= pkg.version %>\n<%= pkg.author %>\n"),
    preserveShebangs(),
  ];

  if (!config.devMode) {
    basePlugins.push(analyze(), bundleSize());
  }

  return basePlugins;
}

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: getPlugins({ devMode: !!process.env.DEV }),
  external: ["chalk", "boxen", "yargs"],
};
