import fs from "fs";
import {pipeline} from "stream";
import argsValidate from  "./args-validator.js";
import {errorHandler, inputFilePath, outputFilePath} from "./args-validator.js";
import transform from "./transform-stream.js";

argsValidate();

const readFrom = inputFilePath ? 
  fs.createReadStream(inputFilePath) : process.stdin;
const writeTo = outputFilePath ?
  fs.createWriteStream(outputFilePath, {flags: 'a'}) : process.stdout;

pipeline(
  readFrom,
  transform,
  writeTo,
  err => {
    if (err) {
      errorHandler(err.message);
    }
  }
);