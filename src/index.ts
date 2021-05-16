#! /usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import terminalLink from "terminal-link";
import yargs from "yargs";

const options = yargs.usage("Usage: -n <name>").option("n", {
  alias: "name",
  describe: "Your name",
  type: "string",
  demandOption: false,
}).argv;

const greeting = chalk.white.bold(
  `Hello, ${options.n ? `${options.n}` : "user"}!`
);

const msgBox = boxen(greeting, {
  padding: 1,
  margin: {
    top: 0.2,
    bottom: 0.2,
    left: 0,
    right: 0,
  },
  borderStyle: "round",
  borderColor: "green",
});

const link = terminalLink("My Website", "https://osamaaamer.com", {
  fallback: (text, url) => `${text}: ${url}`,
});

const websiteLink = boxen(`${link.trim()}`, {
  padding: 1,
  margin: {
    top: 0.2,
    bottom: 0.2,
    left: 0,
    right: 0,
  },
  borderStyle: "round",
  borderColor: "green",
});

console.log(msgBox);
console.log(websiteLink);
