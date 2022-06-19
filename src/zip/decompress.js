import fs from 'fs';
import path from 'path';
import { createGunzip } from 'zlib';

const __dirname = path.resolve(path.dirname(''));

export const decompress = async () => {
  const fileToDecompress = fs.createReadStream(path.join(__dirname, 'files/archive.gz'));
  const archive = createGunzip();
  const writableStream = fs.createWriteStream(path.join(__dirname, 'files/fileToCompress.txt'), 'utf-8');
  fileToDecompress.pipe(archive).pipe(writableStream);
};

decompress();



// import { createUnzip } from 'zlib';
// import { pipeline } from 'stream/promises';
// import { createReadStream, createWriteStream } from 'fs';
//
// export const decompress = async () => {
//   const path = './src/zip/files';
//   const gzip = createUnzip();
//   const source = createReadStream(`${path}/archive.gz`);
//   const dest = createWriteStream(`${path}/fileToCompress.txt`);
//
//   await pipeline(source, gzip, dest);
//
//   console.log('Pipeline succeeded. Check fileToCompress.txt.');
// };
//
// decompress().then();