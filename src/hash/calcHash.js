import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async () => {
  const path = './src/hash/files';
  const hash = await createHash('sha256');
  const inputFile = createReadStream(`${path}/fileToCalculateHashFor.txt`);

  inputFile.on('readable', () => {
    const data = inputFile.read();
    if (data)
      hash.update(data);
    else {
      console.log(`Hash calculated: ${hash.digest('hex')}`);
    }
  });
};

calculateHash().then();