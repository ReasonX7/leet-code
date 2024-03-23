import { createInterface } from "node:readline/promises";
import { default as chalk } from "chalk";
import { Logger } from "./logger.mjs";

const rl = createInterface({
  input: process.stdin, output: process.stdout,
});

export const logger = new Logger();

const readPrompt = async (message, handleInput) => {
  while (true) {
    const input = await rl.question(`${chalk.dim("Prompt >> ")}${message}`);

    const { err, result } = handleInput(input);

    if (result != null) {
      return result;
    }
    if (err != null) {
      logger.error(...err);
      continue;
    }

    throw new Error("[readPrompt]: Both result & err properties are undefined.");
  }
};

export const readInteger = (message, min, max) => {
  return readPrompt(message, (input) => {
    if (!/^\d+$/.test(input)) {
      return { err: "Not an integer number." };
    }

    const num = parseInt(input);

    if (num > max || num < min) {
      return { err: ["Input should be in range", min, "<= x <=", max] };
    }

    return { result: num };
  });
};

export const readString = async (message, minLength, maxLength, regex) => {
  return readPrompt(message, (input) => {
    if (!regex.test(input)) {
      return { err: ["Input doesn't match the pattern:", regex.toString()] };
    }
    if (input.length > maxLength || input.length < minLength) {
      return { err: ["Input's length should be in range:", minLength, "<= x <=", maxLength] };
    }

    return { result: input };
  });
};

export const readBoolean = async (message, defaultAnswer = "N") => {
  if (defaultAnswer !== "Y" && defaultAnswer !== "N") {
    throw new Error("[readBoolean]: defaultAnswer should be 'Y' or 'N'");
  }

  const hint = defaultAnswer === "Y" ? "Y|n" : "y|N";
  return readPrompt(`${message} ${chalk.dim(`(${hint}):`)}`, (input) => {
    const str = input.trim();

    if (str.length === 0) {
      return { result: defaultAnswer === "Y" };
    }
    if (/^(y|yes)$/i.test(str)) {
      return { result: true };
    }
    if (/^(n|no)$/i.test(str)) {
      return { result: false };
    }

    return { err: "Expected 'Y', 'N', 'YES', or 'NO'" };
  });
};

export const run = async (fn) => {
  const code = await fn() || 0;

  rl.close();
  process.exit(code);
};
