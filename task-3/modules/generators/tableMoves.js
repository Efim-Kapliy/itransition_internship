import AsciiTable from 'ascii-table';
import CreateTableMatrix from './createTableMatrix.js';

class TableMoves {
  _heading = ['v PC\\User >'];
  _rows = [];

  constructor(inputValues) {
    this.arrayMoves = inputValues;
  }

  getTableMoves() {
    const table = new AsciiTable();
    const matrix = new CreateTableMatrix(this.arrayMoves).getTableMatrix();
    table.setHeading([...this._heading, ...this.arrayMoves]).addRowMatrix(matrix);

    console.log(table.toString());
  }
}

export default TableMoves;
