// Simple addition calculator

// Btn event listiner
document.getElementById("btn").addEventListener("click", btnclick);

function btnclick() {
  // Input
  let num1v = +document.getElementById("num1").value;
  let num2v = +document.getElementById("num2").value;

  // Process
  let total = num1v + num2v;
  // Output
  document.getElementById("output").innerHTML = total;
}
