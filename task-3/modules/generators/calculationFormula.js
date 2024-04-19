class CalculationFormula {
  constructor(userMove, computerMove, totalMoves) {
    this.a = Number(userMove);
    this.b = Number(computerMove);
    this.n = totalMoves;
  }

  getCalculationMoves() {
    this.p = Math.floor(this.n / 2);
    return Math.sign(((this.a - this.b + this.p + this.n) % this.n) - this.p);
  }
}

export default CalculationFormula;

console.log(new CalculationFormula(2, 1, 7).getCalculationMoves());
