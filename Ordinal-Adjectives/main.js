//Ordinal Adjectives

// Button Event Listener
document.getElementById("search").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let input = +document.getElementById("box").value;
  // Process
  if (input == 1) {
    document.getElementById("output").innerHTML = `<h2 id="output" >1st</h2>`;
  } else if (input == 2) {
    document.getElementById("output").innerHTML = `<h2 id="output" >2nd</h2>`;
  } else if (input == 3) {
    document.getElementById("output").innerHTML = `<h2 id="output" >3rd</h2>`;
  } else if (input == 4) {
    document.getElementById("output").innerHTML = `<h2 id="output" >4th</h2>`;
  } else if (input == 5) {
    document.getElementById("output").innerHTML = `<h2 id="output" >5th</h2>`;
  } else if (input == 6) {
    document.getElementById("output").innerHTML = `<h2 id="output" >6th</h2>`;
  } else if (input == 7) {
    document.getElementById("output").innerHTML = `<h2 id="output" >7th</h2>`;
  } else if (input == 8) {
    document.getElementById("output").innerHTML = `<h2 id="output" >8th</h2>`;
  } else if (input == 9) {
    document.getElementById("output").innerHTML = `<h2 id="output" >9th</h2>`;
  } else {
    document.getElementById("output").innerHTML = `<h2 id="output" >error</h2>`;
  }
}
