class CreateMove {
  constructor(input) {
    this.maxMovies = input.length + 1;
  }

  getIndexRandomMove() {
    this.rndMove = Math.floor(Math.random() * (this.maxMovies - 1) + 1);
    return this.rndMove;
  }
}

export default CreateMove;
