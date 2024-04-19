import ActionsData from './actionsData.js';

class SelectedAction {
  constructor(commandIndex, movesEntered) {
    this.commandIndex = commandIndex.toString(); // input type number
    this.movesEntered = movesEntered;
    this.actionsData = new ActionsData(this.movesEntered).getActions(); // type array[string, string]
    this.action = this.actionsData.find((item) => item[0] === this.commandIndex);
  }

  getActiveAction() {
    if (!this.action) {
      return null;
    }
    return this.action[1];
  }

  // getInputProcessing() {
  //   this.calculatingResult;

  //   this.actionOutput;
  // }
}

export default SelectedAction;
