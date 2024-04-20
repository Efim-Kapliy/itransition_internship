import CalculationFormula from './calculationFormula.js';

class CreateTableMatrix {
  _result = [];
  constructor(inputValues) {
    this.inputValues = inputValues;
  }

  getTableMatrix() {
    this.inputValues.forEach((item, u, userMoves) => {
      let row = [item];

      for (let c = 1; c <= userMoves.length; c++) {
        const counting = new CalculationFormula(u + 1, c, userMoves.length).getCalculationMove();
        switch (counting) {
          case 0:
            row.push('Draw');
            break;
          case 1:
            row.push('Win');
            break;
          case -1:
            row.push('Lose');
            break;
          default:
            throw new SyntaxError('The result of the calculation in the table row is incorrect');
        }
      }

      this._result.push(row);
    });
    return this._result;
  }
}

export default CreateTableMatrix;
