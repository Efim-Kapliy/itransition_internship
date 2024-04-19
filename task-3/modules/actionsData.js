class ActionsData {
  _generalActions = [];
  _optionalActions = [
    ['0', 'exit'],
    ['?', 'help'],
  ];
  constructor(movesEntered) {
    this.movesEntered = movesEntered;
  }

  getActions() {
    this.movesEntered.forEach((item, index) => {
      return this._generalActions.push([`${index + 1}`, item]);
    });
    return (this.actions = [...this._generalActions, ...this._optionalActions]);
  }
}

export default ActionsData;
