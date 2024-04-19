'use strict';

import { argv } from 'node:process';
import readline from 'node:readline';

import * as modules from './modules/index.js';

const { CheckInput, CreateMove, Menu, runCSPRNG, getHMAC, gameStep, SelectedAction, CalculationFormula } = modules;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  const inputValues = argv.slice(2);
  let salt;
  let hmac;
  let checkInput = new CheckInput(inputValues).getFeedbackMessages();
  const compMoveIndex = new CreateMove(inputValues).getIndexRandomMove();

  if (checkInput) {
    console.log(checkInput);
    rl.close();
    return;
  }

  await runCSPRNG()
    .then((key) => (salt = key))
    .catch();

  await getHMAC(compMoveIndex, salt)
    .then((hex) => (hmac = hex))
    .catch();

  new Menu(hmac, inputValues).getMenu();

  await gameStep(inputValues, rl, hmac)
    .then((userMoveIndex) => {
      const compMove = new SelectedAction(compMoveIndex, inputValues).getActiveAction();
      console.log(`Computer move: ${compMove}`);
      return [userMoveIndex, compMoveIndex];
    })
    .then((array) => {
      const result = new CalculationFormula(array[0], array[1], inputValues.length).getCalculationMoves();
      switch (result) {
        case 0:
          console.log('Draw');
          break;
        case 1:
          console.log('You win!');
          break;
        case -1:
          console.log('You lose...');
          break;
        default:
          throw new SyntaxError('The result is incorrect');
      }
      console.log(`HMAC key:\n${salt}`);
      console.log(
        '########################## You can check the HMAC here: ##########################\nhttps://codezi.pro/hmac-sha3-256-generator'
      );
    })
    .catch();
  rl.close();
};

main();
