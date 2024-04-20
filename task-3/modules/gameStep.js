import SelectedAction from './selectedAction.js';
import Menu from './menu.js';
import TableMoves from './generators/tableMoves.js';

const gameStep = (inputValues, rl, hmac) => {
  return new Promise((resolve, reject) => {
    rl.question(`Enter your move: `, (response) => {
      let answer = response.trim();
      const regexp = /^\d+|\?{1}$/gi;
      const selectedAction = new SelectedAction(answer, inputValues).getActiveAction();

      if (!answer || !regexp.test(answer) || selectedAction === null) {
        console.log(`=============== Error: Enter one of the above move numbers ===============`);
        new Menu(hmac, inputValues).getMenu();
        gameStep(inputValues, rl);
        return;
      }

      if (answer === '0') {
        console.log("You're out!");
        return rl.close();
      }

      if (answer === '?') {
        new TableMoves(inputValues).getTableMoves();
        return rl.close();
      }

      console.log(`Your move: ${selectedAction}`);
      resolve(response);
      return rl.close();
    });
  });
};

export default gameStep;
