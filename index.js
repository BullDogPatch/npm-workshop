import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

console.log(
  chalk.underline.bgGreen('Craig') + ' ' + chalk.underline.bgRed('Clayton')
);

const firstName = 'Craig';
const isTheBestDeveloper = false;
const error = chalk.blue.bold.bgRed;

if (isTheBestDeveloper) {
  console.log(`${chalk.blue.bold.bgGreen(firstName)} is the best developer`);
} else {
  console.log(`${error(firstName)} is NOT the best developer`);
}
