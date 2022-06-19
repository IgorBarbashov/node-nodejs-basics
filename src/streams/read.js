import * as fs from 'fs';
import path from 'path';
import process from 'process';

const __dirname = path.resolve(path.dirname(''));

export const read = async () => {
  const fileToRead = path.join(__dirname, 'files/fileToRead.txt');

  const readableStream = fs.createReadStream(fileToRead, 'utf8');

  readableStream.on('error', function (error) {
    console.log(`error: ${error.message}`);
  })

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  })
};

read();


// import { createReadStream } from 'fs';
// import { pipeline } from 'stream/promises';
//
// export const read = async () => {
//   const path = './src/streams/files';
//   const source = createReadStream(`${path}/fileToRead.txt`, {encoding: 'utf-8'});
//
//   await pipeline(source, process.stdout);
// };
//
// read().then();