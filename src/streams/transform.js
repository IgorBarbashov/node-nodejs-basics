import process from 'process';
import { Transform } from 'stream';

class ReverseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const entry = chunk.toString();
      if (entry.trim() == 'exit') {
        process.exit();
      }
      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk);
      console.log('\r\nEnter text or type "exit" to exit the program: ');
    } catch (err) {
      callback(err);
    }
  }
}

export const transform = async () => {
  console.log('Enter text or type "exit" to exit the program: ');
  const reversedText = new ReverseTransform();
  process.stdin.pipe(reversedText).pipe(process.stdout);
}

transform();



// import { Transform } from 'stream';
// import {pipeline} from "stream/promises";
//
// export const transform = async () => {
//   const reverseText = new Transform({
//     transform(chunk, _, callback) {
//       callback(null, chunk.toString().split('').reverse().join(''));
//     }
//   });
//
//   await pipeline(process.stdin, reverseText, process.stdout);
// };
//
// transform().then();