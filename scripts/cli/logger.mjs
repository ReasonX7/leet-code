import { default as chalk } from "chalk";

export class Logger {
  #blockStart = "";

  log(...messages) {
    console.log(this.#blockStart, ...messages);
  }

  error(...messages) {
    console.error(this.#blockStart, chalk.red("Error:"), ...messages);
  }

  block(title) {
    this.log(
      chalk.dim("\n==============================\n"),
      chalk.cyan(title),
      chalk.dim("\n==============================\n"),
    );
    this.#blockStart = "  ";
  }

  blockEnd() {
    this.#blockStart = this.#blockStart.slice(0, -2);
    this.log(chalk.dim("\n==============================\n"));
  }
}