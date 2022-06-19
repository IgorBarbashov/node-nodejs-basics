import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
  const pathModule = './src/cp/files/script.js';
  fork(pathModule, args);
};

spawnChildProcess(process.argv).then();