document.getElementById("btn").addEventListener("click", bntclick);

function bntclick() {
  // Variables
  let ranNum = Math.random();
  let input = document.getElementById("search-in").value;
  // Answers
  if (input == "") {
    alert("Please ask a question...");
  } else if (input === "Does a magic 8 ball actually work?") {
    alert("How dare you doubt me!");
  } else if (input === "Is JavaScript awesome?") {
    alert("Of Course!");
  } else if (ranNum < 0.2) {
    alert("Without a Doubt.");
  } else if (ranNum < 0.4) {
    alert("As I see it, yes.");
  } else if (ranNum < 0.6) {
    alert("Concentrate and ask again.");
  } else if (ranNum < 0.8) {
    alert("Don't count on it.");
  } else if (ranNum < 1.0) {
    alert("Outlook not so good.");
  }
}
