import { pbkdf2, getHashes, createHmac } from 'node:crypto';

const getHMAC = (move, salt) => {
  return new Promise((resolve, reject) =>
    // pbkdf2(move.toString(), salt, 1, 32, 'sha3-256', (err, derivedKey) => {
    //   if (err) reject(err.message);
    //   resolve(derivedKey.toString('hex'));
    // })
    resolve(createHmac('sha3-256', salt).update(move.toString()).digest('hex'))
  );
};

export default getHMAC;
