import * as fs from 'fs/promises';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));
const folderToListPath = path.join(__dirname, 'files');

export const doesExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    return false;
  }
}

export const list = async () => {
  const folderExists = await doesExist(folderToListPath);
  const filesArray = [];

  if (folderExists) {
    const items = await fs.readdir(folderToListPath, { withFileTypes: true });

    for (let item of items) {
      filesArray.push(item.name);
    }
    console.log(filesArray);

  } else throw new Error ('FS operation failed');
};

list();