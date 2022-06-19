import { Worker, isMainThread, SHARE_ENV } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  if (isMainThread) {
    const worker = new Worker('process.env.num = 7', { eval: true, env: SHARE_ENV });
    worker.on('exit', () => {
      console.log(nthFibonacci(process.env.num));
    });
  }
};

sendResult();