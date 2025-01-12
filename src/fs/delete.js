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

export const remove = async () => {
  const deletedFilePath = path.join(__dirname, 'files/fileToRemove.txt');
  const fileExists = await doesExist(deletedFilePath);

  if (fileExists) {
    await fs.unlink(deletedFilePath, (err) => {
      if (err) {
        throw new Error('FS operation failed');
      }
      console.log(`File ${deletedFilePath} was successfully deleted`);
    });
  } else {
    throw new Error ('FS operation failed');
  }
};

remove();