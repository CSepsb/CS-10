// Password Streght Checker
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get search input
  let password = document.getElementById("search-in").value;
  let quality = password.lenght;

  //   Test the search name
}
if (quality <= 4) {
  document.getElementById("output").innerHTML = `<h2 id="output">Weak</h2>`;
} else {
  document.getElementById("output").innerHTML = `<h2 id="output">error</h2>`;
}
