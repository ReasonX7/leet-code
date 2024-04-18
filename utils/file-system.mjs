import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

export const readJson = (importMetaUrl, filePath) => {
  const dir = dirname(fileURLToPath(importMetaUrl));
  const file = join(dir, filePath);
  return readFile(file)
    .then((buf) => buf.toString())
    .then((str) => JSON.parse(str));
};
