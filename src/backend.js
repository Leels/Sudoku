export var Sudoku = function(numberInput) {
  this.numberInput = numberInput,
  this.splitArray = []
};

Sudoku.prototype.arrayify = function() {
  var splitSudoku = [];
  var numberInputs = this.numberInput;
  for (var i = 0; i < 9; i++) {
    splitSudoku.push(numberInputs.slice(0, 9));
    numberInputs.splice(0, 9);
  }
  this.splitArray = splitSudoku;
  return splitSudoku;
}

Sudoku.prototype.numberCheck = function(splitArray) {
  var outcome = "";
  for (var j = 0; j < splitArray.length; j++) {
    for (var i = 1; i < 10; i ++) {
      if (splitArray[j].includes("1" && "2" && "3" && "4" && "5" && "6" && "7" && "8" && "9")) {
        outcome = "won";
      } else {
        outcome = "lost";
        break;
      }
      return outcome;
    }
  }
}
