import { randomBytes } from 'node:crypto';

const runCSPRNG = () => {
  return new Promise((resolve, reject) =>
    randomBytes(32, (err, buf) => {
      if (err) reject(err.message);
      resolve(buf.toString('hex'));
    })
  );
};

export default runCSPRNG;
