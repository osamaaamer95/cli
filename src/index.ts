#! /usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const greeting = chalk.white.bold("Hello!");

const msgBox = boxen(greeting, {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
});

console.log(msgBox);
