# Title
## Author

### Description
#### This website will...:


## GitHub Pages link

  [Visit (site))](link)

### Known Bugs
#### None

### Setup
#### Clone this repository:

#### Please let me know if you have any problems!

### Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### Further Exploration

### License
#### This software is licensed under the MIT license.

#### Copyright (c) 2019

## Specs

For array of 9 numbers, return true if contains all numbers from 1 - 9 with no repeats
Ex Input: 123458796
Ex Output: true

For array of 81 numbers, function separates them into 9 arrays of 9 numbers each and puts all those into a larger array

Create array of arrays, all including 9 numbers

var completedSudoku = [51358719845789084789545890157891345]

var rowArray = completedSudoku.split()


var splitSudoku = [];
for (var i = 0; i < 9; i++) {
  var completedSudoku = "123456789132456789123456789123456789123456789123456789123456789123456789123456789".split("");
  splitSudoku.push(completedSudoku.slice(0, 9));
  completedSudoku.splice(0, 9);
  console.log(splitSudoku);
  console.log(completedSudoku);
}
