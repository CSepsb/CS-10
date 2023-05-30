// Mad lib
document.getElementById("btn"), addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let family = document.getElementById("family-in").value;
  let noun = document.getElementById("noun-in").value;
  let action = document.getElementById("action-in").value;

  // Procces
  let message = `My ${family} loves to eat ${noun} and then ${action}.`;
  // Output
  document.getElementById("output").innerHTML = message;
}