import { Sudoku } from "./../src/backend.js";

describe("sudoku stuff", () => {
  var sudoku = new Sudoku("123466789132456789123456789123456789123456789123456789123456789123456789123456789".split(""));
  var sudokuArray = sudoku.arrayify();
  var anArray = sudoku.splitArray

  test("should cut input into array of arrays of nine characters each", () => {
    expect(sudokuArray[0]).toEqual("123466789".split(""));
    expect(sudoku.splitArray).toEqual(sudokuArray);
    console.log(sudoku.splitArray);
  });
  test("should check to see if numbers 1-9 are included", () => {
    expect(sudoku.numberCheck(anArray)).toEqual("lost");
  })
});
