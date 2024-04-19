class CreateMove {
  constructor(input) {
    this.maxMovies = input.length + 1;
  }

  getIndexRandomMove() {
    return Math.floor(Math.random() * (this.maxMovies - 1) + 1);
  }
}

export default CreateMove;
