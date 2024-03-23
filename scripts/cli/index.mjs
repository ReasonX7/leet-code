import { default as fs } from "node:fs";
import { default as fsp } from "node:fs/promises";
import { default as path } from "node:path";
import { default as chalk } from "chalk";
import { logger, readBoolean, readInteger, readString, run } from "./terminal.mjs";
import { toCamelCase, toCapitalFirstAll, toDashCase } from "./utils.mjs";

const cwd = process.cwd();

const sourceFolder = path.join(cwd, "src");

const formMainFileContent = (title) => {
  const str = `
/**
 * # ${title}
 *
 * <-- Description -->
 */
export const ${toCamelCase(title)} = () => {

};
  `;

  return str.trim();
};

const formTestFileContent = (title) => {
  const str = `
import { describe, it, expect } from "vitest";
  
describe("${title}", () => {

});
  `;

  return str.trim();
};

const formBenchFileContent = (title) => {
  const str = `
import { describe, bench } from "vitest";
  
describe("${title}", () => {
  describe("Test Case #01", () => {

  });
});
  `;

  return str.trim();
};

const folderExists = (folder) => {
  try {
    return fs.statSync(folder).isDirectory();
  } catch (ex) {
    return false;
  }
};

const main = async () => {
  const num = await readInteger("Problem number: ", 1, 9999);
  const title = await readString("Problem title: ", 2, 100, /^(\w|\s)+$/).then((str) => str.toLowerCase());

  const dashCaseTitle = toDashCase(title);
  const capitalCaseTitle = toCapitalFirstAll(title);

  const strNum = num.toString().padStart(4, "0");
  const describeTitle = `#${strNum} - ${dashCaseTitle}`;
  const folderName = `${strNum}_${dashCaseTitle}`;
  const problemFolder = path.join(sourceFolder, folderName);
  const mainFile = path.join(problemFolder, `${dashCaseTitle}.mjs`);
  const testFile = path.join(problemFolder, `${dashCaseTitle}.spec.mjs`);
  const benchFile = path.join(problemFolder, `${dashCaseTitle}.bench.mjs`);

  logger.block("Result output:");
  logger.log(chalk.blue("Title      :"), capitalCaseTitle);
  logger.log(chalk.blue("Main File  :"), mainFile);
  logger.log(chalk.blue("Test File  :"), testFile);
  logger.log(chalk.blue("Bench File :"), benchFile);
  logger.blockEnd();

  const problemFolderExists = folderExists(problemFolder);
  const generateQuestion = problemFolderExists
    ? `Folder or file ${chalk.bold(`"${folderName}"`)} already exists. Delete and generate again?`
    : "Generate problem folder?";

  const okToGenerate = await readBoolean(generateQuestion, problemFolderExists ? "N" : "Y");
  if (!okToGenerate) {
    return 0;
  }

  if (problemFolderExists) {
    await fsp.rm(problemFolder, { recursive: true, force: true });
  }

  await fsp.mkdir(problemFolder);

  await Promise.all([
    await fsp.writeFile(mainFile, formMainFileContent(title)),
    await fsp.writeFile(testFile, formTestFileContent(describeTitle)),
    await fsp.writeFile(benchFile, formBenchFileContent(describeTitle)),
  ]);

  logger.log("\nFiles have being generated!");
};

await run(main);