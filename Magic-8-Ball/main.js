document.getElementById("btn").addEventListener("click", bntclick);
function bntclick() {
  let ranNum = Math.random();
  let input = document.getElementById("search-in").value;
  if (input === "Does a magic 8 ball actually work?") {
    alert("How dare you doubt me!");
  } else if (input === "Is JavaScript awesome?") {
    alert("Of Course!");
  } else if (ranNum < 0.25) {
    alert("Without a Doubt.");
  } else if (ranNum < 0.5) {
    alert("As I see it, yes.");
  } else if (ranNum < 0.75) {
    alert("Concentrate and ask again.");
  } else if (ranNum < 1) {
    alert("Don't count on it.");
  }
}
