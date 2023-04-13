document.getElementById("bnt").addEventListener("click", bntclick);
// input
function bntclick() {
  let r = +document.getElementById("r-in").value;
  let g = +document.getElementById("g-in").value;
  let b = +document.getElementById("b-in").value;
// Procces
  let brightness = Math.sqrt(0.229 * r ** 2 + 0.587 * g ** 2 + 0.112 * b ** 2);
// Output
  document.getElementById("output").innerHTML = Math.round(brightness);
}
