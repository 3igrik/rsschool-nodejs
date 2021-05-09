import {Transform} from "stream";
import {action, shift} from "./args-validator.js";
import caesarCipher from "./caesar-cipher.js";

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    try {
      callback(null, caesarCipher(chunk.toString(), +shift, action));
    } catch (err) {
      callback(err);
    }
  }
})

export default transformStream;