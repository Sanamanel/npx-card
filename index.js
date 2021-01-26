const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
  name: chalk.white("Rachida Haddouch"),
  handle: chalk.white("Sanamanel"),
  work: chalk.white("Webdev at BeCode"),
  npm: chalk.blue.bold("https://npmjs.com/") + chalk.cyan("~sanamanel"),
  github: chalk.blue.bold("https://github.com/") + chalk.magenta("Sanamanel"),
  linkedin:
    chalk.blue.bold("https://linkedin.com/in/") + chalk.green("rachida-webdev"),
  web: chalk.magenta.bold("http://bout-de-creations.com/"),
  npx: chalk.magenta("npx-card") + " " + chalk.white("Sanamanel"),
  labelWork: chalk.bgWhite.blue.bold("Work:"),
  labelNpm: chalk.bgWhite.blue.bold("Npm:"),
  labelGitHub: chalk.bgWhite.blue.bold("GitHub:"),
  labelLinkedIn: chalk.bgWhite.blue.bold("LinkedIn:"),
  labelWeb: chalk.bgWhite.blue.bold("My Website:"),
  labelCard: chalk.bgWhite.blue.bold("Card:"),
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
