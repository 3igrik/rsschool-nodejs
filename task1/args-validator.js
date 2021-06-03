import { Command } from "commander";
import fs from "fs";
import chalk from "chalk";

const commands = new Command;
  
commands.option("-s, --shift <number>", "a shift")
        .option("-a, --action <type>", "an action encode/decode")
        .option("-i, --input <input-file>", "an input file")
        .option("-o, --output <output-file>", "an output file")
        .parse();

const args = commands.opts(),
      shift = args.shift,
      action = args.action,
      inputFilePath = args.input,
      outputFilePath = args.output;

function errorHandler(err) {
  if (err) {
    process.stderr.write(chalk.red.bgBlack(`${err.message}\n`));
    process.exit(1);
  }
}

function validate() {
  if (!shift) {
    errorHandler(new Error("Error: missing required argument: --shift/-s"));
  } else if (isNaN(Number(shift))) {
    errorHandler(
      new Error("Error: shift(--shift/-s) must take the value of a number")
    );
  }

  if (!action) {
    errorHandler(new Error("Error: missing required argument: --action/-a"));
  } else if (action !== "encode" && action !== "decode") {
    errorHandler(
      new Error("Error: action(--action/-a) must be 'encode' or 'decode'")
    );
  }

  if (inputFilePath) {
    fs.access(inputFilePath, fs.constants.R_OK, err => errorHandler(err));
  }

  if (outputFilePath) {
    if (fs.existsSync(outputFilePath)) {
      errorHandler(
        new Error(`Error: file ${outputFilePath} does not exist`)
      );
    }
    
  } 
}

export {errorHandler, action, shift, inputFilePath, outputFilePath};
export default validate;