import * as fs from 'fs';
import readline from 'readline';
import path from 'path';
import process from 'process';

const __dirname = path.resolve(path.dirname(''));

export const write = async () => {
  const fileToWrite = path.join(__dirname, 'files/fileToWrite.txt');
  const writableStream = fs.createWriteStream(fileToWrite);

  writableStream.on('error', (error) => {
    console.log(`FS operation failed: ${error.message}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter text or type "exit" to finish writing: '
  });

  rl.prompt();

  rl.on('line', (line) => {
    switch (line.trim()) {
      case 'exit':
        rl.close();
        break;
      default:
        let sentence = line + '\n'
        writableStream.write(sentence);
        rl.prompt();
        break;
    }
  }).on('close', () => {
    writableStream.end();
    writableStream.on('finish', () => {
      console.log(`Your text has been written to ${fileToWrite}`);
    })
    setTimeout(() => {
      process.exit(0);
    }, 100);
  });
};

write();




// import { createWriteStream } from 'fs';
// import { pipeline } from 'stream/promises';
//
// export const write = async () => {
//   const path = './src/streams/files';
//   const dest = createWriteStream(`${path}/fileToWrite.txt`, {encoding: 'utf-8'});
//
//   await pipeline(process.stdin, dest);
// };
//
// write().then();