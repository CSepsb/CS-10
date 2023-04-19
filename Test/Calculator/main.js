// Calculator
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let mass = document.getElementById("mass-in").value;
  let speed = document.getElementById("speed-in").value;

  // Procces
  let answer = (mass * speed ** 2) / 2;

  //   Output
  document.getElementById("output").innerHTML = answer;
}
