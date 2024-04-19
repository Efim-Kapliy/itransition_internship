import { pbkdf2, getHashes, createHmac } from 'node:crypto';

const getHMAC = (move, salt) => {
  return new Promise((resolve, reject) => resolve(createHmac('sha3-256', salt).update(move.toString()).digest('hex')));
};

export default getHMAC;
