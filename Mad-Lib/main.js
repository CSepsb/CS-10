// Mad Lib Project
document.getElementById("bnt").addEventListener("click", Madlib);
function Madlib() {
  // Input
  let member = document.getElementById("member").value;
  let noun = document.getElementById("noun").value;
  let action = document.getElementById("action").value;
// Process
  let message = `My ${member} loves to eat ${noun} and then ${action}.`;
// Output
  dcument.getElementByIod("output").innerHTML = message;
}
