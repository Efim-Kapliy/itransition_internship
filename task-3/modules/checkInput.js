class CheckInput {
  constructor(values) {
    this.values = values;
    this.examples =
      'Examples of valid input data: Rock Paper Scissors or Rock Paper Scissors Lizard Spock or 1 2 3 4 5 6 7 8 9';
    this.errorMessage = {
      min: `The number of input parameters must be more than two. ${this.examples}`,
      even: `The number of input parameters must be odd. ${this.examples}`,
      duplication: `The input parameters should not be repeated. ${this.examples}`,
    };
  }

  getFeedbackMessages() {
    if (this.values.length < 3) return this.errorMessage.min;
    if (this.values.length % 2 === 0) return this.errorMessage.even;
    this.noCollisions = this.values.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);
    if (this.values.length !== this.noCollisions.length) return this.errorMessage.duplication;
    return;
  }
}

export default CheckInput;
