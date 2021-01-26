const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
  name: chalk.white("Rachida Haddouch"),
  handle: chalk.white("Sanamanel"),
  work: chalk.white("Webdev at BeCode"),
  npm: chalk.blue.bold("https://npmjs.com/") + chalk.cyan("~sanamanel"),
  github: chalk.blue.bold("https://github.com/") + chalk.cyan("Sanamanel"),
  linkedin:
    chalk.blue.bold("https://linkedin.com/in/") + chalk.cyan("rachida-webdev"),
  web: chalk.cyan.bold("http://bout-de-creations.com/"),
  npx: chalk.magenta("npx-card") + " " + chalk.white("Sanamanel"),
  labelWork: chalk.bgWhite.magenta.bold("Work:"),
  labelNpm: chalk.bgWhite.magenta.bold("Npm:"),
  labelGitHub: chalk.bgWhite.magenta.bold("GitHub:"),
  labelLinkedIn: chalk.bgWhite.magenta.bold("LinkedIn:"),
  labelWeb: chalk.bgWhite.magenta.bold("My Website:"),
  labelCard: chalk.bgWhite.magenta.bold("Card:"),
};
const line = "\n";
const empty = "";

console.log(
  chalk.magenta(
    boxen(
      [
        `${data.name} / ${data.handle}`,
        empty,
        `${data.labelWork} ${data.work}`,
        empty,
        `${data.labelNpm} ${data.npm}`,
        `${data.labelGitHub} ${data.github}`,
        `${data.labelLinkedIn} ${data.linkedin}`,
        empty,
        `${data.labelWeb} ${data.web}`,
        empty,
        `${data.labelCard} ${data.npx}`,
      ].join(line),
      {
        padding: 2,
        margin: 2,
        borderStyle: "double",
      }
    )
  )
);
