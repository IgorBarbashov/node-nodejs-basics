import * as fs from 'fs/promises';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));

export const doesExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    return false;
  }
}

export const rename = async () => {
  const fileToRename = 'wrongFilename.txt';
  const renamedFile = 'properFilename.md';
  const fileToRenamePath = path.join(__dirname, `files/${fileToRename}`);
  const renamedFilePath = path.join(__dirname, `files/${renamedFile}`);

  const srcFileExists = await doesExist(fileToRenamePath);

  if(srcFileExists) {
    const dstFileExists = await doesExist(renamedFilePath);

    if (!dstFileExists) {
      await fs.rename(fileToRenamePath, renamedFilePath);
    } else {
      throw new Error ('FS operation failed');
    }
  } else {
    throw new Error ('FS operation failed');
  }
};

rename();