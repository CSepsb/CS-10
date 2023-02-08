document.getElementById("bnt").addEventListener("click", Madlib);
function Madlib() {
  let member = document.getElementById("member").value;
  let noun = document.getElementById("noun").value;
  let action = document.getElementById("action").value;

  let message = `My ${member} loves to eat ${noun} and then ${action}.`;
  document.getElementById("output").innerHTML = message;
}
