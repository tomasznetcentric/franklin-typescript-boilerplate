/* eslint-disable no-console */

// eslint-disable-next-line import/no-extraneous-dependencies
import * as sass from 'sass';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const ignoredFiles = [];
const sassOptions = { style: 'compressed' };

const compileAndSave = async (sassFile) => {
  const dest = sassFile.replace(path.extname(sassFile), '.css');

  fs.writeFile(dest, sass.compile(sassFile, sassOptions).css, (r) => {
    if (!r) {
      console.log(`Compiled and Saved: ${dest}`);
    }
  });
};

fs.watch('.', { recursive: true }, (eventType, fileName) => {
  if (path.extname(fileName) === '.scss' && eventType === 'change') {
    if (!ignoredFiles.includes(fileName)) {
      compileAndSave(path.join(dir, fileName)).then();
    }
  }
});
