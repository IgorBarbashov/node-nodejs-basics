import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';

const __dirname = path.resolve(path.dirname(''));

export const compress = async () => {
  const fileToCompress = fs.createReadStream(path.join(__dirname, 'files/fileToCompress.txt'), 'utf-8');
  const archive = createGzip();
  const writableStream = fs.createWriteStream(path.join(__dirname, 'files/archive.gz'), 'utf-8');
  fileToCompress.pipe(archive).pipe(writableStream);
};

compress();


// import { createGzip } from 'zlib';
// import { pipeline } from 'stream/promises';
// import { createReadStream, createWriteStream } from 'fs';
//
// export const compress = async () => {
//   const path = './src/zip/files';
//   const gzip = createGzip();
//   const source = createReadStream(`${path}/fileToCompress.txt`);
//   const dest = createWriteStream(`${path}/archive.gz`);
//
//   await pipeline(source, gzip, dest);
//
//   console.log('Pipeline succeeded. Check archive.gz.');
// };
//
// compress().then();