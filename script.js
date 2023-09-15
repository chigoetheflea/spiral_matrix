document.addEventListener(`DOMContentLoaded`, () => {

    const fillMatrix = (matrixSize) => {
      // const matrixSize = [4, 3];
      let matrixRounds = Math.ceil(Math.min(...matrixSize) / 2);
      let matrixColumns = matrixSize[1];
      let matrixRows = matrixSize[0];
      //let cellShift = 0;
      let value = 1;
      const matrix = new Array(matrixRows);

      for (let i = 0; i < matrixRows; i++) {
        const matrixCells = new Array(matrixColumns);
        matrixCells.fill(0);
        matrix[i] = matrixCells;
      }

      const fillRound = (y, x, rows, cols) => {
        // console.log(`start: ${y}, ${x}\nrows: ${matrixRows}\ncolumns: ${matrixColumns}`);

        for (let topCols = x; topCols < x + matrixColumns; topCols++) {
          matrix[y][topCols] = value;

          // console.table(matrix);

          value++;
        }

        // console.table(matrix);

        if (rows > 1) {

          for (let rightCols = y + 1; rightCols < y + matrixRows; rightCols++) {
            matrix[rightCols][x + matrixColumns - 1] = value;

            // console.table(matrix);

            value++;
          }

          // console.table(matrix);

          for (let bottomCols = x + matrixColumns - 2; bottomCols >= x; bottomCols--) {
            matrix[y + matrixRows - 1][bottomCols] = value;

            // console.table(matrix);

            value++;
          }

          // console.table(matrix);

          for (let leftCols = y + matrixRows - 2; leftCols > y;  leftCols--) {
            matrix[leftCols][x] = value;

            // console.table(matrix);

            value++;
          }

          // console.table(matrix);

        }
      };

      for (let row = 0, col = 0; row < matrixRounds; row++) {
        fillRound(row, col, matrixRows, matrixColumns);

        col++;
        matrixColumns -= 2;
        matrixRows -= 2;
      }


      return matrix;
    };

    console.table(fillMatrix([1, 1]));
    console.table(fillMatrix([1, 2]));
    console.table(fillMatrix([1, 5]));
    console.table(fillMatrix([2, 1]));
    console.table(fillMatrix([2, 2]));
    console.table(fillMatrix([2, 3]));
    console.table(fillMatrix([3, 2]));
    console.table(fillMatrix([3, 3]));
    console.table(fillMatrix([3, 4]));
    console.table(fillMatrix([4, 3]));
    console.table(fillMatrix([4, 4]));
    console.table(fillMatrix([4, 5]));
    console.table(fillMatrix([5, 1]));
    console.table(fillMatrix([5, 4]));
    console.table(fillMatrix([5, 5]));
    // console.table(fillMatrix([3, 4]));


});
