// Password Streght Checker
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get search input
  let password = +document.getElementById("search-in").value;
  //   Test the search name

  if (password.lenght <= 4) {
    document.getElementById("output").innerHTML = `<h2 id="output">Weak</h2>`;
  } else if (password.lenght >= 5) {
    document.getElementById("output").innerHTML = `<h2 id="output">Okay</h2>`;
  } else {
    document.getElementById("output").innerHTML = `<h2 id="output">error</h2>`;
  }
}
