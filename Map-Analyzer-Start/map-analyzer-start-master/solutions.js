// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables
let row, column; // Row & Column of Mouse on the Map
let outputEl = document.getElementById("currentTile");

// Solution Functions...
function level1Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 4) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level2Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 2) {
    outputEl.innerHTML = "Hills";
  } else if (column >= 8) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}
function level3Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 2 || column >= 8) {
    outputEl.innerHTML = "Hills";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level4Solution() {
  // USE BINARY IF STATEMENT
  if (row <= 2) {
    outputEl.innerHTML = "Hills";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level5Solution() {
  // USE CHAINED IF STATEMENT
  if (row <= 2) {
    outputEl.innerHTML = "Hills";
  } else if (row <= 5) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level6Solution() {
  // USE BINARY IF STATEMENT
  if (row >= 2 && row <= 5) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level7Solution() {
  // USE BINARY IF STATEMENT
  if (column == 7 && row == 4) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level8Solution() {
  // USE BINARY IF STATEMENT
  if (column === 2 || row === 5) {
    outputEl.innerHTML = "Tree";
  } else {
    outputEl.innerHTML = "Sand";
  }
}
function level9Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 5 && row <= 5) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level10Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 1) {
    outputEl.innerHTML = "Hills";
  } else if (column <= 3) {
    outputEl.innerHTML = "Tree";
  } else if (column <= 7) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level11Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 5 && row <= 3) {
    outputEl.innerHTML = "Water";
  } else if (column <= 5 && row >= 4) {
    outputEl.innerHTML = "Sand";
  } else if (column >= 6 && row >= 3) {
    outputEl.innerHTML = "Trees";
  } else {
    outputEl.innerHTML = "Hills";
  }
}

function level12Solution() {
  // USE BINARY IF STATEMENT
  if (column >= 4 && row <= 5) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level13Solution() {
  // USE BINARY IF STATEMENT
  if (column >= 4 && column <= 9 && row >= 2 && row <= 5) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Trees";
  }
}

function level14Solution() {
  // USE CHAINED IF STATEMENT
  if (column >= 2 && column <= 4 && row >= 1 && row <= 5) {
    outputEl.innerHTML = "Tree";
  } else if (column >= 7 && column <= 10 && row >= 3 && row <= 5) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}
