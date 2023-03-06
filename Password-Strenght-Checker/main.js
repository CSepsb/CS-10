// Password Strength Checker
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get password input
  let password = document.getElementById("search-in").value;
  let length = password.length;

  // Test the password strength
  if (length <= 4) {
    document.getElementById("output").innerHTML = `<h2>Weak</h2>`;
  } else if (length <= 8) {
    document.getElementById("output").innerHTML = `<h2>Okay</h2>`;
  } else if (length <= 12) {
    document.getElementById("output").innerHTML = `<h2>Strong</h2>`;
  } else if (length >= 13) {
    document.getElementById("output").innerHTML = `<h2>Very Strong</h2>`;
  } else {
    document.getElementById("output").innerHTML = `<h2>IDK</h2>`;
  }
}