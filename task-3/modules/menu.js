import ActionsData from './actionsData.js';

class Menu {
  _result = '';
  constructor(hmac, input) {
    this.header = `HMAC:\n${hmac}\nAvailable moves:`;
    this.input = input;
    this.actions = '';
  }

  getMenu() {
    this.actionsData = new ActionsData(this.input).getActions();
    this.actions = this.actionsData.map((item) => `\n${item[0]} — ${item[1]}`).join('');
    this._result = `${this.header} ${this.actions}`;
    console.log(this._result);
  }
}

export default Menu;
